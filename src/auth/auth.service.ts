import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaClient } from "@prisma/client";
import { LoginDto } from "./dto/create-auth.dto";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDetails: LoginDto) {
    try {
      const findUser = await prisma.users.findUnique({
        where: {
          email: loginDetails.email,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          password: true,
          roleId: true,
          provider: true,
          roles: {
            select: {
              id: true,
              role: true,
            },
          },
        },
      });

      if (findUser == null) {
        throw new NotFoundException(`Please check your email and password`);
      } else {
        console.log(findUser.password == "" && loginDetails.password == "");
        if (findUser.password == "" && findUser.provider == "google") {
          const payload = {
            id: findUser.id,
            role: findUser.roles.id,
          };
          return {
            token: await this.jwtService.sign(payload, {
              expiresIn: "30d",
              algorithm: "HS256",
              secret: process.env.JWT_SECRET,
            }),
            userData: findUser,
            userRole: findUser.roles.id,
          };
        }
        const compare = await bcrypt.compare(
          loginDetails.password,
          findUser.password
        );
        if (compare) {
          const payload = {
            id: findUser.id,
            role: findUser.roles.id,
          };

          return {
            token: await this.jwtService.sign(payload, {
              expiresIn: "30d",
              algorithm: "HS256",
              secret: process.env.JWT_SECRET,
            }),
            userData: findUser,
            userRole: findUser.roles.id,
          };
        } else {
          return {
            message: "please check your username and password",
          };
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  async genrateCookie(token, req, res) {
    res.cookie("access_token", token, {
      expires: new Date(new Date().getTime() + 30 * 1000),
      sameSite: "strict",
      httpOnly: true,
    });
  }
}
