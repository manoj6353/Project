import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async findAll() {
    const data = await this.appService.findAll();
    return { data };
  }

  @Get('/index')
  @Render('registration')
  root() {
    return;
  }
  // @Get('fetch-state/:id')
  // async fetchState(@Param('id') id: string) {
  //   const state = await this.appService.fetchState(+id);
  //   return { state };
  // }

  // @Get('fetch-city/:id')
  // async fetchCity(@Param('id') id: string) {
  //   const city = await this.appService.fetchCity(+id);
  //   return { city };
  // }

  // @Post()
  // @Redirect('/index')
  // async create(@Body() createUserDto) {
  //   return await this.appService.create(createUserDto);
  // }
}
