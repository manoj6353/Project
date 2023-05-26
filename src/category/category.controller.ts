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
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @Get("/add")
  // @Render("add")
  // async addcategory() {
  //   return { data: "done" };
  // }
  // async add() {
  //   return await this.categoryService.addCategory();
  // }

  @Post()
  @Redirect("/category")
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      await this.categoryService.create(createCategoryDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Get()
  @Render("category")
  async findAll() {
    const data = await this.categoryService.findAll();
    return { data };
  }

  @Get("/trash")
  async trash() {
    return await this.categoryService.trash();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.categoryService.findOne(+id);
  }

  @Post("/add")
  @Redirect("/category")
  update(@Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.categoryService.remove(+id);
  }

  @Delete("/trash/:id")
  async restore(@Param("id") id: string) {
    return await this.categoryService.restore(+id);
  }
}
