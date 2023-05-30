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
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UserService } from "../user/user.service";
import { Request } from "express";

@Controller("admin")
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly userservice: UserService
  ) {}

  @Post()
  @Redirect("/admin")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.userservice.createadmin(createAdminDto);
  }

  @Get()
  @Render("admin/user")
  root() {
    return;
  }

  @Get("/adminuser")
  async findAll(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.userservice.findadminuser(query);
    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
