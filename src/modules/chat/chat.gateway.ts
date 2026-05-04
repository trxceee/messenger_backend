import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket, Server } from 'socket.io';
import { forwardRef, Inject } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: { origin: '*' } },
  transports: ['websocket'],
  // namespace: 'chat',
})
export class ChatGateway {
  constructor(
    @Inject(forwardRef(() => ChatService))
    private readonly chatService: ChatService,
  ) {}
  @WebSocketServer() server: Server;

  async handleConnection(
    @ConnectedSocket() client: Socket,
  ): Promise<Socket | void> {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    await this.chatService.setOnline(userId, true);
    client.join(`room:${userId}`);
    const userChats = await this.chatService.getUserChats(userId);
    userChats.forEach((chat) => {
      client.join(`chat:${chat.id}`);
    });
    this.server.emit('userOnline', { userId, lastSeen: new Date() });
  }

  async handleDisconnect(
    @ConnectedSocket() client: Socket,
  ): Promise<Socket | void> {
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    await this.chatService.setOnline(userId, false);
    this.server.emit('userOffline', {
      userId,
      lastSeen: new Date(),
    });
  }

  @SubscribeMessage('joinChat')
  public async joinChat(
    @MessageBody() data: { chatId: string },
    @ConnectedSocket() client: Socket,
  ): Promise<Socket | void | boolean> {
    console.log('joinChat');
    const userId = client.handshake.auth.userId;
    if (!userId) return client.disconnect();

    const isMember = await this.chatService.isMember(data.chatId, userId);

    if (!isMember) {
      return client.emit('error', 'Нет доступа к чату.');
    }
    client.join(`chat:${data.chatId}`);
  }

  @SubscribeMessage('sendMessage')
  async sendMessage(
    @MessageBody()
    data: {
      chatId: string;
      text: string;
      files?: Array<{ fileName: string; fileSize: number; fileUrl: string }>;
    },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    console.log('sendMessage');
    const userId = client.handshake.auth.userId;
    const message = await this.chatService.createMessage(
      data.chatId,
      userId,
      data.text,
      data.files,
    );
    this.server.to(`chat:${data.chatId}`).emit('message:created', message);
  }

  @SubscribeMessage('editMessage')
  async editMessage(
    @MessageBody() data: { messageId: string; newText: string },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const userId = client.handshake.auth.userId;
    const message = await this.chatService.editMessage(
      data.messageId,
      userId,
      data.newText,
    );
    this.server.to(`chat:${message.chatId}`).emit('message:edited', message);
  }

  @SubscribeMessage('deleteMessage')
  async deleteMessage(
    @MessageBody() data: { messageId: string },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const userId = client.handshake.auth.userId;
    const message = await this.chatService.deleteMessage(
      data.messageId,
      userId,
    );
    this.server.to(`chat:${message.chatId}`).emit('message:deleted', message);
  }

  @SubscribeMessage('readMessages')
  async readMessages(
    @MessageBody() data: { messageIds: Array<string>; chatId: string },
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    console.log('readMessages');
    const userId = client.handshake.auth.userId;
    await this.chatService.setMessagesIsRead(
      userId,
      data.chatId,
      data.messageIds,
    );
    this.server.to(`chat:${data.chatId}`).emit('message:isread', {
      chatId: data.chatId,
      messageIds: data.messageIds,
    });
  }
}
