import { MailerService } from "@nestjs-modules/mailer";
import { PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";
import { Response } from "express";
const prisma = new PrismaClient();

@Injectable()
export class ForgotPasswordService {
  constructor(public mailerService: MailerService) {}
  create(createForgotPasswordDto: CreateForgotPasswordDto) {
    return;
  }

  async findOne(passwordDto: CreateForgotPasswordDto, res) {
    const user = await prisma.users.findUnique({
      where: {
        email: passwordDto.email,
      },
    });

    const link = Math.random().toString(20).substring(2, 7);
    if (!user) throw new Error("User does not exist");

    const resetToken = crypto.randomBytes(64).toString("hex");

    const time = `${new Date().getTime() + 5 * 60000}`;

    const data = await prisma.forgotTokens.upsert({
      where: {
        userId: user.id,
      },
      update: {
        otp: link,
        expireTime: time,
      },
      create: {
        userId: user.id,
        otp: link,
        expireTime: time,
      },
    });

    const userId = user.id;
    this.mailerService.sendMail({
      to: passwordDto.email,
      from: process.env.senderEmail,
      subject: "Forgot Password Change",
      text: "Ecommerce",
      html: `<b> ${link} <b>`,
    });

    res.send(
      `check you mail <a href='/forgotpassword/forgotpasswordupdate?id=${userId}'>Change Password</a>`
    );
  }

  async updatePassword(id, passwordDto) {
    const findUser = await prisma.forgotTokens.findFirst({
      where: {
        userId: +id,
      },
    });
    const currentTime = `${new Date().getTime() / 1000}`;

    const passwordNew = passwordDto.password;
    const hashPassword = await bcrypt.hash(passwordNew, 10);

    if (findUser.otp == passwordDto.otp) {
      if (currentTime <= findUser.expireTime) {
        const updatePassword = await prisma.users.update({
          where: {
            id: +id,
          },
          data: {
            password: hashPassword,
          },
        });
        return { success: "Password changed" };
      } else {
        return { error: "OTP is expired" };
      }
    } else {
      return { error: "Please check your OTP" };
    }
  }

  update(id: number, updateForgotPasswordDto: UpdateForgotPasswordDto) {
    return;
  }

  remove(id: number) {
    return;
  }
}
