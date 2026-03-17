import { Chat, Message, Prisma, User } from '@/prisma/generated/prisma';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { FilesService } from '../files/files.service';

type ChatWithUsers = Prisma.ChatGetPayload<{
  include: {
    members: { include: { user: true } };
    messages: { include: { attachments: true; chat: true } };
  };
}>;

type OnlineStatus = {
  userId: string;
  isOnline: boolean;
  lastSeen: Date | null;
};

const CHAT_FULL_INCLUDE = {
  members: { include: { user: true } },
  messages: { include: { attachments: true, chat: true } },
} satisfies Prisma.ChatInclude;

const MESSAGE_FULL_INCLUDE = {
  sender: true,
  attachments: true,
} satisfies Prisma.MessageInclude;

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    @Inject(forwardRef(() => ChatGateway))
    private readonly chatGateway: ChatGateway,
    private readonly filesService: FilesService,
  ) {}

  public async getDm(user: User, userBId: string): Promise<Chat> {
    const chat =
      (await this.findExistingDm(user.id, userBId)) ??
      (await this.createDm(user.id, userBId));

    const enriched = await this.enrichChatWithContactNames(user, chat);
    this.broadcastNewDm(enriched);

    return enriched;
  }

  public async getMyDms(user: User): Promise<Chat[]> {
    const chats = await this.prismaService.chat.findMany({
      where: {
        isGroup: false,
        members: { some: { userId: user.id } },
      },
      include: CHAT_FULL_INCLUDE,
      orderBy: { updatedAt: 'asc' },
    });

    return Promise.all(
      chats.map((chat) => this.enrichChatWithContactNames(user, chat)),
    );
  }

  public async getMessages(chatId: string, userId: string) {
    await this.assertIsMember(chatId, userId);

    return this.prismaService.message.findMany({
      where: { chatId },
      orderBy: { createdAt: 'asc' },
      include: MESSAGE_FULL_INCLUDE,
    });
  }

  public async createMessage(
    chatId: string,
    senderId: string,
    text: string,
    files?: Array<{ fileName: string; fileSize: number; fileUrl: string }>,
  ): Promise<Message> {
    await this.assertIsMember(chatId, senderId);

    const message = await this.prismaService.message.create({
      data: { chatId, senderId, text },
    });

    if (files?.length) {
      await this.attachFilesToMessage(message.id, chatId, files);
    }

    const fullMessage = await this.prismaService.message.findUnique({
      where: { id: message.id },
      include: { sender: true, attachments: true },
    });

    if (!fullMessage) {
      throw new Error('Message not found after creation');
    }

    return fullMessage;
  }

  public async deleteMessage(
    messageId: string,
    userId: string,
  ): Promise<Message> {
    const message = await this.getMessage(messageId);
    this.assertIsSender(message, userId);

    return this.prismaService.message.update({
      where: { id: messageId },
      data: { deletedAt: new Date() },
    });
  }

  public async editMessage(
    messageId: string,
    userId: string,
    newText: string,
  ): Promise<Message> {
    const message = await this.getMessage(messageId);
    this.assertIsSender(message, userId);

    return this.prismaService.message.update({
      where: { id: messageId },
      include: { attachments: true },
      data: { text: newText, editedAt: new Date() },
    });
  }

  public async deleteChat(user: User, chatId: string): Promise<true> {
    await this.assertIsMember(chatId, user.id);

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: { include: { user: true } } },
    });

    if (!chat) throw new NotFoundException({ message: 'Чат не найден.' });

    await this.cascadeDeleteChat(chatId);
    this.broadcastChatDeleted(chat.members, chatId);

    return true;
  }

  public async setMessagesIsRead(
    userId: string,
    chatId: string,
    messageIds: string[],
  ): Promise<void> {
    await this.assertIsMember(chatId, userId);

    const messages = await Promise.all(
      messageIds.map((id) => this.getMessage(id)),
    );

    await Promise.all(
      messages
        .filter((msg) => msg.sender.id !== userId)
        .map((msg) =>
          this.prismaService.message.update({
            where: { id: msg.id },
            data: { isRead: true },
          }),
        ),
    );
  }

  public async getOnlineStatus(chatId: string): Promise<OnlineStatus[]> {
    const members = await this.prismaService.chatMember.findMany({
      where: { chatId },
      include: { user: true },
    });

    return members.map(({ userId, user }) => ({
      userId,
      isOnline: user.isOnline,
      lastSeen: user.lastSeen,
    }));
  }

  public async setOnline(userId: string, online: boolean): Promise<void> {
    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        isOnline: online,
        lastSeen: online ? null : new Date(),
      },
    });
  }

  public async isMember(chatId: string, userId: string): Promise<boolean> {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
    });
    return !!member;
  }

  public getUserChats = async (userId: string) => {
    return this.prismaService.chat.findMany({
      where: { members: { some: { userId } } },
      include: {
        members: { include: { user: true } },
        messages: { include: { chat: true, sender: true } },
      },
    });
  };

  public async getMessage(messageId: string) {
    const message = await this.prismaService.message.findUnique({
      where: { id: messageId },
      include: { chat: true, sender: true },
    });

    if (!message) {
      throw new NotFoundException({ message: 'Сообщение не найдено.' });
    }

    return message;
  }

  //  helpers

  private async findExistingDm(
    userAId: string,
    userBId: string,
  ): Promise<ChatWithUsers | null> {
    return this.prismaService.chat.findFirst({
      where: {
        isGroup: false,
        AND: [
          { members: { some: { userId: userAId } } },
          { members: { some: { userId: userBId } } },
        ],
      },
      include: CHAT_FULL_INCLUDE,
    });
  }

  private async createDm(
    userAId: string,
    userBId: string,
  ): Promise<ChatWithUsers> {
    return this.prismaService.chat.create({
      data: {
        isGroup: false,
        members: {
          create: [{ userId: userAId }, { userId: userBId }],
        },
      },
      include: CHAT_FULL_INCLUDE,
    });
  }

  public enrichChatWithContactNames = async (
    user: User,
    chat: ChatWithUsers,
  ): Promise<ChatWithUsers> => {
    const otherMember = chat.members.find((m) => m.userId !== user.id);
    if (!otherMember) return chat;

    const contact = await this.prismaService.userContacts.findFirst({
      where: {
        username: user.username,
        usernameContact: otherMember.user.username,
      },
    });

    if (contact) {
      otherMember.user.firstName = contact.firstNameContact;
      otherMember.user.lastName = contact.lastNameContact;
    }

    return chat;
  };

  private async attachFilesToMessage(
    messageId: string,
    chatId: string,
    files: Array<{ fileName: string; fileSize: number; fileUrl: string }>,
  ): Promise<void> {
    await Promise.all(
      files.map(async (file) => {
        const fileExt = file.fileUrl.split('files/')[1].split('.')[1];
        await this.prismaService.attachment.create({
          data: {
            messageId,
            chatId,
            uuidURI: file.fileUrl,
            fileSize: file.fileSize,
            fileExt,
            fileName: file.fileName,
          },
        });
      }),
    );
  }

  private async cascadeDeleteChat(chatId: string): Promise<void> {
    await this.prismaService.attachment.deleteMany({ where: { chatId } });
    await this.prismaService.message.deleteMany({ where: { chatId } });
    await this.prismaService.chatMember.deleteMany({ where: { chatId } });
    await this.prismaService.chat.delete({ where: { id: chatId } });
  }

  private async assertIsMember(chatId: string, userId: string): Promise<void> {
    const isMember = await this.isMember(chatId, userId);
    if (!isMember) {
      throw new ForbiddenException({
        message: 'Вы не являетесь участником чата.',
      });
    }
  }

  private assertIsSender(message: { senderId: string }, userId: string): void {
    if (message.senderId !== userId) {
      throw new ForbiddenException({
        message: 'Вы не являетесь отправителем.',
      });
    }
  }

  private broadcastNewDm(chat: ChatWithUsers): void {
    chat.members.forEach(({ userId }) => {
      this.chatGateway.server.to(`room:${userId}`).emit('newDm', chat);
    });
  }

  private broadcastChatDeleted(
    members: { user: { id: string } }[],
    chatId: string,
  ): void {
    members.forEach(({ user }) => {
      this.chatGateway.server.to(`room:${user.id}`).emit('chatDeleted', chatId);
    });
  }
}
