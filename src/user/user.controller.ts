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
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Request } from "express";
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Redirect("login")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/users")
  async findAll(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.userService.findAll(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @Render("user")
  root() {
    return;
  }

  @Post("/login")
  login(@Body() createUserDto) {
    return this.userService.login(createUserDto);
  }

  @Get(":id")
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
  @Redirect("/admin")
  async update(@Body() updateUserDto: UpdateUserDto) {
    const data = await this.userService.update(updateUserDto);
    return { data };
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const record = await this.userService.remove(+id);
    return { record };
  }
}
