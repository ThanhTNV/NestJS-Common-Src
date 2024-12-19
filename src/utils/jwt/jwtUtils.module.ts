import { Module } from '@nestjs/common';
import { JwtUtilsService } from './jwtUtils.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, JwtUtilsModule],
  providers: [JwtUtilsService],
  exports: [JwtUtilsService],
})
export class JwtUtilsModule {}
