import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  UseGuards,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/index')
  @UseGuards(JwtAuthGuard)
  @Render('registration')
  async fetchCountry() {
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
  findAll() {
    return this.userService.findAll();
  }

  @Post('/login')
  login(@Body() createUserDto) {
    return this.userService.login(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
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