import { Controller, Get, Render, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
import { AuthGuard } from "./authguard/jwt-auth-guard";
import * as transporter from "mail.config";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService
  ) {}

  getHello(): any {
    throw new Error("Method not implemented.");
  }

  @Get("/home")
  @Render("index")
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get("/forgotpassword")
  @Render("forgotpassword")
  roots() {
    console.log(transporter);

    return;
  }

  @Get()
  @Render("login")
  root() {
    return;
  }

  @Get("/signup")
  @Render("registration")
  signup() {
    return;
  }
}
