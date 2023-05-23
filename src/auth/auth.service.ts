import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<any> {
    const user = await prisma.users.findFirst({ where: { email: email } });

    if (!user) {
      throw new NotFoundException(`Please check your email and password`);
    }

    const isPasswordValid = bcrypt.compare(user.password, password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Please check your email and password');
    }
    return {
      accessToken: await this.jwtService.sign({ id: user.id }),
    };
  }
}
