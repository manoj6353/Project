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
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/add')
  @UseGuards(JwtAuthGuard)
  @Render('products')
  async addproducts() {
    const category = await this.productService.fetchcategory();
    return { category };
  }

  @Get('/subcategory/:id')
  @UseGuards(JwtAuthGuard)
  async fetchcategory(@Param('id') id: string) {
    const category = await this.productService.fetchsubcategory(+id);
    return category;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Redirect('/product')
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Render('productshow')
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get('search/:productName')
  @UseGuards(JwtAuthGuard)
  findsearch(@Param('productName') productName: string) {
    return this.productService.findsearch(productName);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Delete('/trash/:id')
  @UseGuards(JwtAuthGuard)
  restore(@Param('id') id: string) {
    return this.productService.restore(+id);
  }
}
