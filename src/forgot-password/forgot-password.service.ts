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
    return "This action adds a new forgotPassword";
  }

  findAll() {}

  async findOne(passwordDto: CreateForgotPasswordDto, res) {
    const user = await prisma.users.findUnique({
      where: {
        email: passwordDto.email,
      },
    });

    if (!user) throw new Error("User does not exist");

    let resetToken = crypto.randomBytes(64).toString("hex");

    const data = await prisma.forgotTokens.upsert({
      where: {
        userId: user.id,
      },
      update: {
        token: resetToken,
      },
      create: {
        userId: user.id,
        token: resetToken,
      },
    });
    const userId = data.id;

    const link = Math.random().toString(20).substring(2, 12);
    const cookies = { tokens: link, userId: userId };
    res.cookie("OTP", cookies, {
      expires: new Date(new Date().getTime() + 10 * 1000),
      sameSite: "strict",
      httpOnly: true,
    });

    this.mailerService.sendMail({
      to: passwordDto.email,
      from: "manoj.bajiya.2023@gmail.com",
      subject: "Forgot Password Change",
      text: "Ecommerce",
      html: `<b> ${link} <b>`,
    });

    return res.send(
      "check you mail <a href='http://localhost:4000/forgotpassword/forgotpasswordupdate'>Change Password</a>"
    );
  }

  async updatePassword(id, passwordDto, res: Response, token) {
    console.log(id, passwordDto, "service");

    const findUser = await prisma.forgotTokens.findFirst({
      where: {
        userId: id,
      },
    });

    let savedToken = findUser.token;

    if (savedToken != token) {
      throw new Error("Token is not valid");
    }

    let passwordNew = passwordDto.password;
    const hashPassword = await bcrypt.hash(passwordNew, 10);

    console.log(hashPassword);

    const udatePassword = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        password: hashPassword,
      },
    });

    res.redirect("/");
  }

  update(id: number, updateForgotPasswordDto: UpdateForgotPasswordDto) {
    return `This action updates a #${id} forgotPassword`;
  }

  remove(id: number) {
    return `This action removes a #${id} forgotPassword`;
  }
}
