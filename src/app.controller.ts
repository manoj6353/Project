import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @Render('index')
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get('/signup')
  @Render('registration')
  signup() {
    return;
  }

  @Get('/login')
  @Render('login')
  login() {
    return;
  }
}
