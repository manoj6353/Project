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
  UseGuards,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UserService } from "../user/user.service";
import { Request } from "express";
import { AuthGuard } from "../authguard/jwt-auth-guard";
@Controller("admin")
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly userservice: UserService
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @Redirect("/admin")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.userservice.createadmin(createAdminDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("admin/user")
  root() {
    return;
  }

  @Get("/adminuser")
  @UseGuards(AuthGuard)
  async findAll(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.userservice.findadminuser(query);
    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
