import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';
import { HttpServiceInterceptor } from './headerset';
import { LocalStorage } from 'node-localstorage';
import { AuthGuard } from '@nestjs/passport';
global.localStorage = new LocalStorage('./scratch');
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() { email, password }: LoginDto) {
    const token = await this.authService.login(email, password);
    localStorage.setItem('id', token.accessToken);
    return token;
  }

  @Header('authorization', localStorage.getItem('id'))
  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(HttpServiceInterceptor)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('---------------------');

    return req.user;
  }
}
