import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

  @Get()
  findAll() {
    const data = this.addtocartService.findAll();
    console.log(data);

    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.addtocartService.findOne(+id);
    console.log('---------', data);
    return data;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddtocartDto: UpdateAddtocartDto,
  ) {
    return this.addtocartService.update(+id, updateAddtocartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addtocartService.remove(+id);
  }
}
