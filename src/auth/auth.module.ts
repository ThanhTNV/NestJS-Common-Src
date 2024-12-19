import { Module } from '@nestjs/common';
import {
  AccessTokenAuthGuard,
  EmailVerifyTokenAuthGuard,
  RefreshTokenAuthGuard,
  RoleAuthGuard,
} from './auth.guard';
import { JwtUtilsModule } from 'src/utils/jwt/jwtUtils.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [JwtUtilsModule, ConfigModule],
  providers: [
    AccessTokenAuthGuard,
    RoleAuthGuard,
    EmailVerifyTokenAuthGuard,
    RefreshTokenAuthGuard,
  ],
  exports: [
    AccessTokenAuthGuard,
    RoleAuthGuard,
    EmailVerifyTokenAuthGuard,
    RefreshTokenAuthGuard,
  ],
})
export class AuthModule {}
