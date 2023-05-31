import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { AddtocartService } from "./addtocart.service";
import { UpdateAddtocartDto } from "./dto/update-addtocart.dto";
import { AuthGuard } from "../authguard/jwt-auth-guard";
@Controller("addtocart")
export class AddtocartController {
  constructor(private readonly addtocartService: AddtocartService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Req() req: Request, @Body() { productId }: any) {
    const id = req.cookies.data.id;
    const data = await this.addtocartService.create(+id, +productId);
    return { data };
  }

  @Get("/getcart")
  @UseGuards(AuthGuard)
  async getcarts(@Req() req: Request, @Query("productId") productId: string) {
    const id = await req.cookies.data.id;
    const data = await this.addtocartService.getcart(+id, +productId);
    return { data };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("addtocart")
  async findAll(@Req() req: Request) {
    const userid = await req.cookies.data.id;
    const data = await this.addtocartService.findAll(+userid);
    return { data };
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  async findOne(@Param("id") id: string) {
    const data = await this.addtocartService.findOne(+id);
    return { data };
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  update(
    @Param("id") id: string,
    @Body() updateAddtocartDto: UpdateAddtocartDto
  ) {
    return this.addtocartService.update(+id, updateAddtocartDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  async remove(@Param("id") id: string) {
    const data = await this.addtocartService.remove(+id);
    return { data };
  }
}
