import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  addCategory() {
    return "render";
  }

  create(createCategoryDto) {
    try {
      return prisma.categories.create({
        data: {
          ...createCategoryDto,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    const data = await prisma.categories.findMany({
      where: { deletedAt: null },
    });
    return data;
  }

  async findOne(id: number) {
    return await prisma.categories.findFirst({
      where: { id: id, deletedAt: null },
    });
  }

  update(updateCategoryDto) {
    const { id, ...category } = updateCategoryDto;
    const ids = parseInt(id);
    return prisma.categories.update({
      where: { id: ids },
      data: {
        ...category,
      },
    });
  }

  remove(id: number) {
    return prisma.categories.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  trash() {
    try {
      return prisma.categories.findMany({
        where: { NOT: [{ deletedAt: null }] },
      });
    } catch (err) {
      console.log(err);
    }
  }

  restore(id: number) {
    try {
      return prisma.categories.update({
        where: { id: id },
        data: {
          deletedAt: null,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
