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
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AddtocartService } from "./addtocart.service";
import { UpdateAddtocartDto } from "./dto/update-addtocart.dto";
@Controller("addtocart")
export class AddtocartController {
  constructor(
    private readonly addtocartService: AddtocartService,
    private jwtService: JwtService
  ) {}

  @Post()
  async create(
    @Query("userId") userId: string,
    @Query("productId") productId: string
  ) {
    const { id } = await this.jwtService.verify(userId);
    return this.addtocartService.create(+id, +productId);
  }

  @Get("/getcart")
  async getcarts(
    @Query("userId") userId: string,
    @Query("productId") productId: string
  ) {
    const { id } = await this.jwtService.verify(userId);
    const data = await this.addtocartService.getcart(+id, +productId);
    return { data };
  }

  @Get()
  findAll() {
    const data = this.addtocartService.findAll();
    return data;
  }

  @Get(":id")
  @Render("addtocart")
  async findOne(@Param("id") id: string) {
    const user = await this.jwtService.verify(id);
    const data = await this.addtocartService.findOne(+user.id);
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
