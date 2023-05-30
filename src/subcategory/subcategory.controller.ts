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
import { SubcategoryService } from "./subcategory.service";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
import { AuthGuard } from "../authguard/jwt-auth-guard";
import { Request } from "express";
@Controller("subcategory")
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get("/add")
  async addproducts() {
    const data = await this.subcategoryService.fetchcategory();
    return { data };
  }

  @Post()
  @Redirect("/subcategory")
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoryService.create(createSubcategoryDto);
  }

  @Get("/subcategories")
  async findCategory(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.subcategoryService.findAll(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @Render("subcategoryshow")
  root() {
    return;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.subcategoryService.findOne(+id);
  }

  @Post("/update")
  @Redirect("/subcategory")
  update(@Body() updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.subcategoryService.update(updateSubcategoryDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.subcategoryService.remove(+id);
  }
}
