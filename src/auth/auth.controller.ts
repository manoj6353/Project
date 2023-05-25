import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';
import { LocalStorage } from 'node-localstorage';
import { AuthEntity } from './entities/auth.entity';
import { Auth } from './dto/auth.dto';
global.localStorage = new LocalStorage('./scratch');
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto) {
    const token = await this.authService.login(email, password);
    localStorage.setItem('id', token.accessToken);
    return token;
  }

  @Post('/authenticate')
  async getProfile(@Body() { accessToken, url }: Auth) {
    const token = await this.authService.verifytoken(accessToken, url);
    return 'manoj';
  }
}
