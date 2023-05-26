import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
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

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto
  ) {
    return this.subcategoryService.update(+id, updateSubcategoryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subcategoryService.remove(+id);
  }
}
