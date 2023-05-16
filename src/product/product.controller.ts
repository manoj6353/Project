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
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/add')
  @Render('products')
  async addproducts() {
    const data = await this.productService.fetchcategory();
    return { data };
  }

  @Post()
  @Redirect('/product')
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  @Render('productshow')
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get('search/:productName')
  findsearch(@Param('productName') productName: string) {
    return this.productService.findsearch(productName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Delete('/trash/:id')
  restore(@Param('id') id: string) {
    return this.productService.restore(+id);
  }
}
