import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
const prisma = new PrismaClient();

@Injectable()
export class SubcategoryService {
  create(createSubcategoryDto) {
    const id = parseInt(createSubcategoryDto.categoryId);
    return prisma.subcategories.create({
      data: {
        categoryId: id,
        subCategoryName: createSubcategoryDto.subCategoryName,
      },
    });
  }

  fetchcategory() {
    try {
      return prisma.categories.findMany({
        select: {
          id: true,
          categoryName: true,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all subcategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategory`;
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return `This action updates a #${id} subcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategory`;
  }
}
