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
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  editFileName,
  imageFileFilter,
} from "./middleware/filefilter.middleware";
import { diskStorage } from "multer";
import { Request } from "express";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("/add")
  async addproducts() {
    const category = await this.productService.fetchcategory();
    return { category };
  }

  @Get("/subcategory/:id")
  async fetchcategory(@Param("id") id: string) {
    const categories = await this.productService.fetchsubcategory(+id);
    return { categories };
  }

  @Post()
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
  async findCategory(@Req() req: Request) {
    const { query } = req;
    const { data, draw, start, recordsFiltered, recordsTotal } =
      await this.productService.allProducts(query);

    return { data, draw, start, recordsFiltered, recordsTotal };
  }

  @Get()
  @Render("productshow")
  async findAll() {
    const categories = await this.productService.fetchcategory();
    return { categories };
  }

  @Get("/category")
  async category() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get("search/:productName")
  findsearch(@Param("productName") productName: string) {
    return this.productService.findsearch(productName);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Post("/update")
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
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }

  @Delete("/trash/:id")
  restore(@Param("id") id: string) {
    return this.productService.restore(+id);
  }
}
