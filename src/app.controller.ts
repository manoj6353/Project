import {
  Controller,
  Get,
  HttpStatus,
  Redirect,
  Render,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard as GoogleAuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
import { AuthGuard } from "./authguard/jwt-auth-guard";
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
import { request } from "http";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private jwtService: JwtService
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

  @Get("/home/data")
  @UseGuards(AuthGuard)
  async sortAll(@Req() req: Request) {
    const price = req.query.sort;
    const data = await this.productService.findAll(`${price}`);
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
  @Redirect("/home")
  @UseGuards(GoogleAuthGuard("google"))
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const emails = await this.userService.findUnique(req.user);
    if (emails != null) {
      const email = emails.email;
      const password = "";
      const login = { email, password };
      const result = await this.authService.login(login);
      if (result.token) {
        res.cookie("auth_token", result.token, { httpOnly: true });
        const payload: any = await this.jwtService.verifyAsync(result.token, {
          secret: process.env.JWT_SECRET,
        });

        res.cookie("data", payload, { httpOnly: true });
      }
    } else {
      const { data } = await this.userService.create(req.user);
      const email = data.email;
      const password = "";
      const login = { email, password };
      const result = await this.authService.login(login);
      if (result.token) {
        res.cookie("auth_token", result.token, { httpOnly: true });
        const payload: any = await this.jwtService.verifyAsync(result.token, {
          secret: process.env.JWT_SECRET,
        });

        res.cookie("data", payload, { httpOnly: true });
      }
    }
  }

  @Get("/signup")
  @Render("registration")
  signup(@Req() req: Request, @Res() res: Response) {
    try {
      if (req.cookies.auth_token) {
        if (req.cookies.data.role == 2 || req.cookies.data.role == 1) {
          console.log("in role");
          res.redirect("/home");
        } else {
          res.redirect("/admin");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
