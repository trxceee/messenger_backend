import type { User, WhoCanSeen } from '@/prisma/generated/prisma';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

type TypeFindById = {
  id: string;
  username?: undefined;
};

type TypeFindByUsername = {
  username: string | undefined;
  id?: undefined;
};

export type TypeUserData = Partial<{
  number: string;
  lastName: string;
  firstName: string;
  username: string;
  id: string;
  email: string | null;
  avatars: string[];
  bio: string | null;
  birthday: Date | null;
  blockedUsers: string[];
  phoneVisible: WhoCanSeen;
  emailVisible: WhoCanSeen;
  bioVisible: WhoCanSeen;
  avatarsVisible: WhoCanSeen;
  birthdayVisible: WhoCanSeen;
  cloudPassword: string | null;
  isOnline: boolean;
  lastSeen: Date | null;
  createdAt: Date;
  updatedAt: Date;
}>;

type TypeFindBy = TypeFindById | TypeFindByUsername;
@Injectable()
export class UsersService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async searchUser(searchText: string): Promise<Array<User>> {
    const normalized = searchText.trim();

    const where: any = {
      AND: [
        {
          OR: [
            { username: { contains: normalized, mode: 'insensitive' } },
            { firstName: { contains: normalized, mode: 'insensitive' } },
            { lastName: { contains: normalized, mode: 'insensitive' } },
          ],
        },
      ],
    };

    const users = await this.prismaService.user.findMany({
      where,
      take: 10,
    });
    return users;
  }

  public async blockUser(user: User, id: string): Promise<boolean> {
    await this.existUser(id);

    if (user.blockedUsers.includes(id)) {
      throw new ConflictException({
        message: 'Пользователь уже заблокирован.',
      });
    }

    await this.noBlockYourself(id, user.id);

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        blockedUsers: [...user.blockedUsers, id],
      },
    });
    return true;
  }

  public async unblockUser(user: User, id: string): Promise<boolean> {
    await this.existUser(id);

    if (!user.blockedUsers.includes(id)) {
      throw new ConflictException({ message: 'Пользователь не заблокирован.' });
    }

    await this.noBlockYourself(id, user.id);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        blockedUsers: [...user.blockedUsers.filter((userId) => userId !== id)],
      },
    });
    return true;
  }

  public async getUserData(
    user: User,
    id?: string,
    username?: string,
  ): Promise<TypeUserData> {
    if (!id && !username) {
      throw new BadRequestException({ message: 'Введите айди пользователя.' });
    }
    if (user.username === username || user.id === id) {
      throw new ForbiddenException({
        message: 'Вы не можете получить свои данные.',
      });
    }

    const foundUser = await this.findContactUser(id ? { id } : { username });

    const contact = await this.prismaService.userContacts.findFirst({
      where: {
        username: foundUser.username,
        usernameContact: user.username,
      },
    });

    const myContact = await this.prismaService.userContacts.findFirst({
      where: {
        username: user.username,
        usernameContact: foundUser.username,
      },
    });

    const isContact = !!contact;
    const isSelf = foundUser.id === user.id;

    const visibleFields: Array<{
      key: keyof User;
      value: unknown;
      visibility: string;
    }> = [
      {
        key: 'number',
        value: foundUser.number,
        visibility: foundUser.phoneVisible,
      },
      {
        key: 'email',
        value: foundUser.email,
        visibility: foundUser.emailVisible,
      },
      { key: 'bio', value: foundUser.bio, visibility: foundUser.bioVisible },
      {
        key: 'birthday',
        value: foundUser.birthday,
        visibility: foundUser.birthdayVisible,
      },
    ];

    const result: Partial<User> = {
      id: foundUser.id,
      username: foundUser.username,
      firstName: myContact ? myContact.firstNameContact : foundUser.firstName,
      lastName: myContact ? myContact.lastNameContact : foundUser.lastName,
      isOnline: foundUser.isOnline,
      avatars: foundUser.avatars,
      lastSeen: foundUser.lastSeen,
    };
    console.log(result);

    for (const { key, value, visibility } of visibleFields) {
      if (this.isVisible(visibility, isContact, isSelf)) {
        result[key] = value as never;
      }
    }

    return result;
  }

  public async isContact(user: User, username: string): Promise<boolean> {
    const contact = await this.prismaService.userContacts.findFirst({
      where: {
        username: user.username,
        usernameContact: username,
      },
    });

    return !!contact;
  }

  // helpers

  public async findUser(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    return user;
  }

  public async isBlocked(myUser: User, blockedUser: User): Promise<boolean> {
    if (
      myUser.blockedUsers.includes(blockedUser.id) ||
      blockedUser.blockedUsers.includes(myUser.id)
    ) {
      // throw new ConflictException({
      //   message: 'Вы заблокировали данного пользователя',
      //   type: 'YOU_ARE_BLOCKED_THIS_USER',
      // });
      // throw new ConflictException({
      //   message: 'Пользователь вас заблокировал',
      //   type: 'YOU_ARE_BLOCKED',
      // });
      return true;
    }
    return false;
  }

  private async findContactUser(findBy: TypeFindBy) {
    const findContactUser = await this.prismaService.user.findUnique({
      where: findBy,
      select: {
        id: true,
        username: true,
        phoneVisible: true,
        emailVisible: true,
        bioVisible: true,
        avatarsVisible: true,
        birthdayVisible: true,
        firstName: true,
        lastName: true,
        number: true,
        email: true,
        isOnline: true,
        lastSeen: true,
        bio: true,
        avatars: true,
        birthday: true,
        contacts: { select: { usernameContact: true } },
      },
    });
    if (!findContactUser)
      throw new NotFoundException({ message: 'Пользователь не найден.' });
    return findContactUser;
  }

  private async existUser(id: string) {
    const existedUser = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!existedUser) {
      throw new NotFoundException({ message: 'Пользователь не найден.' });
    }
    return existedUser;
  }

  private async noBlockYourself(blockId: string, myId: string) {
    if (myId === blockId) {
      throw new ConflictException({
        message: 'Вы не можете заблокировать себя.',
      });
    }
    return true;
  }

  private isVisible(
    visibility: string,
    isContact: boolean,
    isSelf: boolean,
  ): boolean {
    return (
      visibility === 'ALL' ||
      (visibility === 'CONTACTS' && isContact) ||
      (visibility === 'I' && isSelf)
    );
  }
}
