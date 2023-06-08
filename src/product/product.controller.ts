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
  UseInterceptors,
  UploadedFile,
  Req,
  UseGuards,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Request } from "express";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import {
  editFileName,
  imageFileFilter,
} from "./middleware/filefilter.middleware";
import { AuthGuard } from "../authguard/jwt-auth-guard";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("/add")
  @UseGuards(AuthGuard)
  async addproducts() {
    const category = await this.productService.fetchcategory();
    return { category };
  }

  @Get("/subcategory/:id")
  @UseGuards(AuthGuard)
  async fetchcategory(@Param("id") id: string) {
    const categories = await this.productService.fetchsubcategory(+id);
    return { categories };
  }

  @Post()
  @UseGuards(AuthGuard)
  @Redirect("/product")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./public/images",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return await this.productService.create(createProductDto, file);
  }

  @Get("/products")
  @UseGuards(AuthGuard)
  async findCategory(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.productService.allProducts(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("productshow")
  async findAll() {
    const categories = await this.productService.fetchcategory();
    return { categories };
  }

  @Get("/category")
  @UseGuards(AuthGuard)
  async category() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get("search/:productName")
  @UseGuards(AuthGuard)
  async findsearch(@Param("productName") productName: string) {
    const data = await this.productService.findsearch(productName);
    return { data };
  }

  @Get(":id")
  @UseGuards(AuthGuard)
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Post("/update")
  @UseGuards(AuthGuard)
  @Redirect("/product")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./public/images",
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  update(
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.productService.update(updateProductDto, file);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }

  @Delete("/trash/:id")
  @UseGuards(AuthGuard)
  restore(@Param("id") id: string) {
    return this.productService.restore(+id);
  }
}
