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
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Redirect("login")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Render("user")
  async findAll() {
    const user = await this.userService.findAll();
    return { user };
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
