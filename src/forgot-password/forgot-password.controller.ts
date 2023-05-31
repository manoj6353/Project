import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Query,
  Res,
  Req,
} from "@nestjs/common";
import { ForgotPasswordService } from "./forgot-password.service";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";

import { Request, Response } from "express";

@Controller("forgotpassword")
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  // @Post()
  // create(@Body() createForgotPasswordDto: CreateForgotPasswordDto) {
  //   return this.forgotPasswordService.create(createForgotPasswordDto);
  // }

  @Get()
  @Render("forgotpassword")
  async renderForgotPasswordPage() {}

  @Get("/forgotpasswordupdate")
  @Render("forgotpasswordupdate")
  async renderForgotPasswordUpdatePage() {}

  @Post()
  sendMailerPage(
    @Body() createpassdto: CreateForgotPasswordDto,
    @Res() res: Response
  ) {
    return this.forgotPasswordService.findOne(createpassdto, res);
  }

  @Post("/forgotpasswordupdate")
  sendMailerPageUpdate(
    @Req() req: Request,
    @Body() updatepassdto: UpdateForgotPasswordDto,
    @Res() res: Response
  ) {
    const id = req.cookies.OTP.userId;
    const tokens = req.cookies.OTP.tokens;
    console.log("----kkjhjhgjhg---", updatepassdto);
    if (tokens == updatepassdto.token) {
      console.log("manoj");
    }
    return this.forgotPasswordService.updatePassword(
      id,
      updatepassdto,
      res,
      tokens
    );
  }

  // @Post()
  // sendMail() {
  //   this.forgotPasswordService.findAll();
  // }

  // @Get()
  // findOne(@Param("id") id: string) {
  //   return this.forgotPasswordService.findOne(+id);
  // }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateForgotPasswordDto: UpdateForgotPasswordDto
  ) {
    return this.forgotPasswordService.update(+id, updateForgotPasswordDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.forgotPasswordService.remove(+id);
  }
}
