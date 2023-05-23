import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Query,
} from '@nestjs/common';
import { AddtocartService } from './addtocart.service';
import { CreateAddtocartDto } from './dto/create-addtocart.dto';
import { UpdateAddtocartDto } from './dto/update-addtocart.dto';

@Controller('addtocart')
export class AddtocartController {
  constructor(private readonly addtocartService: AddtocartService) {}

  @Post()
  create(@Body() createAddtocartDto: CreateAddtocartDto) {
    return this.addtocartService.create(createAddtocartDto);
  }

  @Get('/getcart')
  async getcarts(
    @Query('userId') userId: string,
    @Query('productId') productId: string,
  ) {
    const data = await this.addtocartService.getcart(+userId, +productId);
    return { data };
  }

  @Get()
  findAll() {
    const data = this.addtocartService.findAll();
    return data;
  }

  @Get(':id')
  @Render('addtocart')
  async findOne(@Param('id') id: string) {
    const data = await this.addtocartService.findOne(+id);
    return { data };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddtocartDto: UpdateAddtocartDto,
  ) {
    return this.addtocartService.update(+id, updateAddtocartDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.addtocartService.remove(+id);
    return { data };
  }
}
