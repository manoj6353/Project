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
  async renderForgotPasswordPage() {
    return;
  }

  @Get("/forgotpasswordupdate")
  @Render("forgotpasswordupdate")
  async renderForgotPasswordUpdatePage() {
    return;
  }

  @Post()
  sendMailerPage(
    @Body() createpassdto: CreateForgotPasswordDto,
    @Res() res: Response
  ) {
    return this.forgotPasswordService.findOne(createpassdto, res);
  }

  @Post("/forgotpasswordupdate")
  async sendMailerPageUpdate(
    @Req() req: Request,
    @Body() updatepassdto: UpdateForgotPasswordDto
  ) {
    const id = req.query.id;
    console.log(id);

    const data = await this.forgotPasswordService.updatePassword(
      id,
      updatepassdto
    );
    console.log(data);

    return { data };
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
