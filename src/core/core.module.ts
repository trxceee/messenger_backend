import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { RedisModule } from './redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@/src/shared/guards/auth.guard';
import { AccountModule } from '@/src/modules/account/account.module';
import { ContactsModule } from '@/src/modules/contacts/contacts.module';
import { ChatModule } from '../modules/chat/chat.module';
import { UsersModule } from '../modules/users/users.module';
import { SessionModule } from '../modules/session/session.module';
import { MulterModule } from '@nestjs/platform-express';
import { FilesModule } from '../modules/files/files.module';
import { CallModule } from '../modules/call/call.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,
    SessionModule,
    AccountModule,
    ContactsModule,
    ChatModule,
    UsersModule,
    FilesModule,
    CallModule,
    MulterModule.register(),
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [PrismaService],
})
export class CoreModule {}
