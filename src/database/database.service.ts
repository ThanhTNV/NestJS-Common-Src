import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService {
  private readonly prisma = new PrismaClient();

  get Address() {
    return this.prisma.address;
  }

  get Fish() {
    return this.prisma.fish;
  }

  get Order() {
    return this.prisma.order;
  }

  get Post() {
    return this.prisma.post;
  }

  get Team() {
    return this.prisma.team;
  }

  get Token() {
    return this.prisma.token;
  }

  get User() {
    return this.prisma.user;
  }
}
