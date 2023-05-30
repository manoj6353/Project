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
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { AddtocartService } from "./addtocart.service";
import { UpdateAddtocartDto } from "./dto/update-addtocart.dto";
@Controller("addtocart")
export class AddtocartController {
  constructor(private readonly addtocartService: AddtocartService) {}

  @Post()
  async create(@Req() req: Request, @Body() { productId }: any) {
    const id = req.cookies.data.id;
    const data = await this.addtocartService.create(+id, +productId);
    return { data };
  }

  @Get("/getcart")
  async getcarts(@Req() req: Request, @Query("productId") productId: string) {
    const id = await req.cookies.data.id;
    const data = await this.addtocartService.getcart(+id, +productId);
    return { data };
  }

  @Get()
  @Render("addtocart")
  async findAll(@Req() req: Request) {
    const userid = await req.cookies.data.id;
    const data = await this.addtocartService.findAll(+userid);
    return { data };
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const data = await this.addtocartService.findOne(+id);
    return { data };
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAddtocartDto: UpdateAddtocartDto
  ) {
    return this.addtocartService.update(+id, updateAddtocartDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    const data = await this.addtocartService.remove(+id);
    return { data };
  }
}
