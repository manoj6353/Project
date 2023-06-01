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
  UseGuards,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import { AuthGuard } from "../authguard/jwt-auth-guard";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Redirect("/")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/users")
  @UseGuards(AuthGuard)
  async findAll(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.userService.findAll(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("user")
  root() {
    return;
  }

  @Post("/login")
  @UseGuards(AuthGuard)
  login(@Body() createUserDto) {
    return this.userService.login(createUserDto);
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  async findOne(@Param("id") id: string) {
    const users = await this.userService.findOne(+id);
    return { users };
  }

  @Get("/email/:mail")
  async findUnique(@Param("mail") mail: string) {
    const verifymail = await this.userService.findUnique(mail);
    return { verifymail };
  }

  @Post("/update")
  @UseGuards(AuthGuard)
  @Redirect("/admin")
  async update(@Body() updateUserDto: UpdateUserDto) {
    const data = await this.userService.update(updateUserDto);
    return { data };
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  async remove(@Param("id") id: string) {
    const record = await this.userService.remove(+id);
    return { record };
  }
}
