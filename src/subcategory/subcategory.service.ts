import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
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

  async findAll() {
    return await prisma.subcategories.findMany({
      where: { deletedAt: null },
      select: {
        id: true,
        subCategoryName: true,
        createdAt: true,
        categories: {
          select: {
            categoryName: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} subcategory`;
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return `This action updates a #${id} subcategory`;
  }

  async remove(id: number) {
    return await prisma.subcategories.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
