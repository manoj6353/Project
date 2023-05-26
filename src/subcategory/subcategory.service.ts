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

  async findOne(id: number) {
    return await prisma.subcategories.findFirst({
      where: { id: id, deletedAt: null },
      select: {
        id: true,
        categoryId: true,
        subCategoryName: true,
      },
    });
  }

  update(updateSubcategoryDto) {
    console.log("===========", updateSubcategoryDto);

    const { id, categoryId, subCategoryName } = updateSubcategoryDto;
    const ids = parseInt(id);
    const categoryid = parseInt(categoryId);
    return prisma.subcategories.update({
      where: { id: ids },
      data: {
        subCategoryName: subCategoryName,
        categoryId: categoryid,
      },
    });
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
