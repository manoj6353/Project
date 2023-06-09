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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  editFileName,
  imageFileFilter,
} from './middleware/filefilter.middleware';
import { diskStorage } from 'multer';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/add')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Render('products')
  async addproducts() {
    const category = await this.productService.fetchcategory();
    return { category };
  }

  @Get('/subcategory/:id')
  async fetchcategory(@Param('id') id: string) {
    const category = await this.productService.fetchsubcategory(+id);
    return category;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Redirect('/product')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.productService.create(createProductDto, file);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Render('productshow')
  async findAll() {
    const data = await this.productService.findAll();
    return { data };
  }

  @Get('search/:productName')
  findsearch(@Param('productName') productName: string) {
    return this.productService.findsearch(productName);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

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
