import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '@/src/core/prisma/prisma.service';
import { User } from '@/prisma/generated/prisma';
import { verify } from 'argon2';
import { CreateAccountDto } from '@/src/modules/account/dto/create-account.dto';
import { AccountService } from '@/src/modules/account/account.service';
import { getSessionMetadata } from '@/src/shared/utils/session-metadata';
import { RedisService } from '@/src/core/redis/redis.service';
import type { Request } from 'express';
import { LoginAccountDto } from './dto/login-account.dto';

type UserSessions = {
  id: string;
  userId: string;
  createdAt: Date;
  cookie?: any;
};

@Injectable()
export class SessionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly accountService: AccountService,
    private readonly redisService: RedisService,
  ) {}

  public async login(
    dto: LoginAccountDto,
    req: Request,
    userAgent: string,
  ): Promise<unknown> {
    const { number, cloudPassword, code } = dto;
    const existedUser = await this.existUser(number);

    // await this.accountService.verifyOtpCode(number, code); 
    await this.verifyPassword(existedUser.cloudPassword, cloudPassword);
    await this.deleteCodes(number);

    return this.saveSession(req, existedUser, userAgent);
  }

  public async register(
    dto: CreateAccountDto,
    req: Request,
    userAgent: string,
  ): Promise<unknown> {
    const createdUser = await this.accountService.createAccount(dto);
    await this.deleteCodes(dto.number);
    return this.saveSession(req, createdUser, userAgent);
  }

  public async logout(req: Request): Promise<unknown> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException({
              message: 'Не удалось завершить сессию.',
            }),
          );
        }
        req.res?.clearCookie('session');
        resolve(true);
      });
    });
  }

  public async findUserSessions(req: Request): Promise<Array<UserSessions>> {
    const userId = req.session.userId;

    if (!userId) {
      throw new NotFoundException({
        message: 'Пользователь не обнаружен в сессии.',
      });
    }

    const keys = await this.redisService.keys('session:*');

    const userSessions: Array<{
      id: string;
      userId: string;
      createdAt: Date;
      cookie?: any;
    }> = [];

    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (sessionData) {
        const session = JSON.parse(sessionData);

        if (session && session.userId === userId) {
          userSessions.push({
            ...session,
            id: key.split(':')[1] || key,
          });
        }
      }
    }

    userSessions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return userSessions.filter((session) => session.id !== req.session.id);
  }

  public async findUserSession(req: Request) {
    const sessionId = req.session.id;
    const sessionData = await this.redisService.get(`session:${sessionId}`);
    if (!sessionData) {
      throw new NotFoundException({ message: 'Сессия не найдена.' });
    }
    const session = JSON.parse(sessionData);
    return {
      ...session,
      id: session.id,
    };
  }

  public async clearCookie(req: Request): Promise<boolean> {
    req.res?.clearCookie('session');
    return true;
  }

  public async removeSession(req: Request, id: string): Promise<boolean> {
    if (req.session.id === id) {
      throw new ConflictException({
        message: 'Текущую сессию удалить нельзя.',
      });
    }

    await this.redisService.del(`session:${id}`);
    return true;
  }

  public async removeSessions(req: Request): Promise<boolean> {
    const keys = await this.redisService.keys('session:*');
    const userId = req.session.userId;
    const userSessions: Array<UserSessions> = [];

    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (sessionData) {
        const session = JSON.parse(sessionData);

        if (session && session.userId === userId) {
          userSessions.push({
            ...session,
            id: key.split(':')[1] || key,
          });
        }
      }
    }

    userSessions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    for (let key of userSessions) {
      if (req.session.id === key.id) continue;
      await this.redisService.del(`session:${key.id}`);
    }
    return true;
  }

  public async sendOtpToMobile(number: string): Promise<string> {
    await this.deleteCodes(number);

    return this.accountService.sendOtpToMobile(number);
  }

  // helpers

  private async saveSession(req: Request, user: User, userAgent: string) {
    const metadata = getSessionMetadata(req, userAgent);

    return new Promise((resolve, reject) => {
      req.session.userId = user.id;
      req.session.createdAt = new Date();
      req.session.metadata = metadata;

      req.session.save((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException({
              message: 'Не удалось сохранить сессию.',
            }),
          );
        }
        resolve(user);
      });
    });
  }

  private async existUser(number: string): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ number: { equals: number } }],
      },
    });

    if (!user) {
      throw new NotFoundException({
        message: 'Пользователя с такими данными не существует.',
      });
    }
    return user;
  }

  private async deleteCodes(number: string): Promise<void> {
    await this.prismaService.codes.deleteMany({
      where: { number },
    });
  }

  private async verifyPassword(
    userCloudPassword: string | null,
    cloudPassword?: string,
  ): Promise<void> {
    if (userCloudPassword) {
      if (!cloudPassword) {
        throw new NotFoundException({
          message: 'Введите облачный пароль.',
          type: 'NON_PASSWORD',
        });
      }
      const isValid = await verify(userCloudPassword, cloudPassword);
      if (!isValid) {
        throw new UnauthorizedException({
          message: 'Неверный облачный пароль.',
        });
      }
    }
  }
}
