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
import { SubcategoryService } from "./subcategory.service";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";

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

  @Get()
  @Render("subcategoryshow")
  async findAll() {
    const data = await this.subcategoryService.findAll();
    return { data };
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
