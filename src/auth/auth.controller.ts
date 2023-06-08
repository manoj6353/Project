import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  Redirect,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { JwtService } from "@nestjs/jwt";
import express, { Request, Response, request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/create-auth.dto";
import { AuthEntity } from "./entities/auth.entity";
import { Auth } from "./dto/auth.dto";
@Controller("auth")
@ApiTags("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {}

  @Post("/login")
  @Redirect("/")
  @ApiOkResponse({ type: AuthEntity })
  async login(
    @Req()
    req: Request,
    @Res()
    res: Response,
    @Body() logindto: LoginDto
  ): Promise<any> {
    const result = await this.authService.login(logindto);
    if (result.token) {
      res.cookie("auth_token", result.token, { httpOnly: true });
      const payload: any = await this.jwtService.verifyAsync(result.token, {
        secret: process.env.JWT_SECRET,
      });
      res.cookie("data", payload, { httpOnly: true });
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: result,
        message: `Login Successfull`,
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        data: null,
        message: `Incorrect Credentials`,
      });
    }
  }
}
