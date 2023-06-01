import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard as GoogleAuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import * as transporter from "mail.config";
import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
import { AuthGuard } from "./authguard/jwt-auth-guard";
import { UserService } from "./user/user.service";
import { CreateUserDto } from "./user/dto/create-user.dto";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
    private readonly userService: UserService
  ) {}

  getHello(): any {
    throw new Error("Method not implemented.");
  }

  @Get("/home")
  @UseGuards(AuthGuard)
  @Render("index")
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get("/forgotpassword")
  @Render("forgotpassword")
  roots() {
    return;
  }

  @Get("/logout")
  async logout(@Req() req: Request, @Res() res: Response) {
    await res.clearCookie("auth_token");
    await res.clearCookie("data");
    return res.redirect("/");
  }

  @Get()
  @Render("login")
  async root(@Req() req: Request, @Res() res: Response) {
    try {
      if (req.cookies.auth_token) {
        if (req.cookies.data.role == 2 || req.cookies.data.role == 1) {
          console.log("in role");
          res.redirect("/home");
        } else {
          res.redirect("/admin");
        }
        console.log("in if");
      }
    } catch (err) {
      console.log(err);
    }
  }

  @Get("/google")
  @UseGuards(GoogleAuthGuard("google"))
  async googleRegister() {
    return;
  }

  @Get("/google/login")
  @Redirect("/")
  @UseGuards(GoogleAuthGuard("google"))
  googleAuthRedirect(@Req() req: Request) {
    console.log(req.user);

    return this.userService.create(req);
  }

  @Get("/signup")
  @Render("registration")
  signup() {
    return;
  }
}
