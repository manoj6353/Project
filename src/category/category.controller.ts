import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Render,
  Redirect,
  Req,
  UseGuards,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { AuthGuard } from "../authguard/jwt-auth-guard";
import { Request } from "express";

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
  @UseGuards(AuthGuard)
  @Redirect("/category")
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      await this.categoryService.create(createCategoryDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Get("/categories")
  @UseGuards(AuthGuard)
  async findCategory(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.categoryService.findAll(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("category")
  root() {
    return;
  }

  @Get("/fetchcategory/:category")
  @UseGuards(AuthGuard)
  async fetchcategory(@Param("category") category: string) {
    const data = await this.categoryService.fetchcategory(category);
    return { data };
  }

  @Get("/trash")
  @UseGuards(AuthGuard)
  async trash() {
    return await this.categoryService.trash();
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  async findOne(@Param("id") id: string) {
    const data = await this.categoryService.findOne(+id);
    return { data };
  }

  @Post("/add")
  @UseGuards(AuthGuard)
  @Redirect("/category")
  update(@Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  remove(@Param("id") id: string) {
    return this.categoryService.remove(+id);
  }

  @Delete("/trash/:id")
  @UseGuards(AuthGuard)
  async restore(@Param("id") id: string) {
    return await this.categoryService.restore(+id);
  }
}
