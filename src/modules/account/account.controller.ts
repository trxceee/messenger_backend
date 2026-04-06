import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  AccountService,
  type VisibilityField,
} from '@/src/modules/account/account.service';
import { GetUser } from '@/src/shared/decorators/get-user.decorator';
import type { User, WhoCanSeen } from '@/prisma/generated/prisma';
import { SetPasswordDto } from '@/src/modules/account/dto/set-password.dto';
import { ChangePasswordDto } from '@/src/modules/account/dto/change-password.dto';
import { ChangeEmailDto } from '@/src/modules/account/dto/chnage-email.dto';
import { CompleteAccountDto } from './dto/user-complete.dto';
import { ChangeNameDto } from './dto/change-name.dto';
import 'multer';

@Controller('account')
export class AccountController {
  public constructor(private readonly accountService: AccountService) {}

  @Get('me')
  public getMe(@GetUser() user: User): Promise<User> {
    return this.accountService.getMe(user);
  }

  @Post('complete')
  public setUserCompleteDate(
    @GetUser() user: User,
    @Body() dto: CompleteAccountDto,
  ): Promise<User> {
    return this.accountService.setUserCompleteDate(user, dto);
  }

  @Patch('username')
  public updateUsername(
    @GetUser() user: User,
    @Body('username') username: string,
  ): Promise<boolean> {
    return this.accountService.updateUsername(user, username);
  }

  @Patch('name')
  public setNames(
    @GetUser() user: User,
    @Body() dto: ChangeNameDto,
  ): Promise<boolean> {
    return this.accountService.setNames(user, dto.firstName, dto.lastName);
  }

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  public featAvatar(
    @GetUser() user: User,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    return this.accountService.featAvatar(user, file);
  }

  @Delete('avatar')
  public removeAvatar(
    @GetUser() user: User,
    @Body('index', ParseIntPipe) index: number,
  ): Promise<boolean> {
    return this.accountService.removeAvatar(user, index);
  }

  @Post('password')
  public setPassword(
    @GetUser() user: User,
    @Body() dto: SetPasswordDto,
  ): Promise<boolean> {
    return this.accountService.setPassword(user, dto);
  }

  @Patch('password')
  public changePassword(
    @GetUser() user: User,
    @Body() dto: ChangePasswordDto,
  ): Promise<boolean> {
    return this.accountService.changePassword(user, dto);
  }

  @Delete('password')
  public removePassword(@GetUser() user: User): Promise<boolean> {
    return this.accountService.removePassword(user);
  }

  @Post('email')
  public addEmail(
    @GetUser() user: User,
    @Body('email') email: string,
  ): Promise<boolean> {
    return this.accountService.addEmail(user, email);
  }

  @Patch('email')
  public updateEmail(
    @GetUser() user: User,
    @Body() dto: ChangeEmailDto,
  ): Promise<boolean> {
    return this.accountService.updateEmail(user, dto);
  }

  @Post('bio')
  public setBio(
    @GetUser() user: User,
    @Body('bio') bio: string,
  ): Promise<boolean> {
    return this.accountService.setBio(user, bio);
  }

  @Delete('bio')
  public removeBio(@GetUser() user: User): Promise<boolean> {
    return this.accountService.removeBio(user);
  }

  @Post('birthday')
  public setDateBirthdate(
    @GetUser() user: User,
    @Body('date') date: string,
  ): Promise<boolean> {
    return this.accountService.setDateBirthdate(user, date);
  }

  @Delete('birthday')
  public removeDateBirthdate(@GetUser() user: User): Promise<boolean> {
    return this.accountService.removeDateBirthdate(user);
  }

  @Patch('visibility')
  public setVisibility(
    @GetUser() user: User,
    @Body('field') field: VisibilityField,
    @Body('whoCanSee') whoCanSee: WhoCanSeen,
  ): Promise<boolean> {
    return this.accountService.setVisibility(user, field, whoCanSee);
  }
}
