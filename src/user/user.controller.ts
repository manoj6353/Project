import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('user')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/index')
  @ApiBearerAuth()
  @Render('registration')
  async fetchCountry(@Req() req) {
    // console.log(req);
    console.log('==========', req.user);

    const data = await this.userService.fetchCountry();
    return { data };
  }

  @Get('fetch-state/:id')
  async fetchState(@Param('id') id: string) {
    const state = await this.userService.fetchState(+id);
    return { state };
  }

  @Get('fetch-city/:id')
  async fetchCity(@Param('id') id: string) {
    const city = await this.userService.fetchCity(+id);
    return { city };
  }

  @Post()
  // @Redirect('/')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiBearerAuth()
  findAll() {
    return this.userService.findAll();
  }

  @Post('/login')
  login(@Body() createUserDto) {
    return this.userService.login(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
