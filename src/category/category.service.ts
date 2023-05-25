import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  addCategory() {
    return 'render';
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
      include: { products: true },
      where: { deletedAt: null },
    });
    return data;
  }

  findOne(id: number) {
    return prisma.categories.findFirst({
      where: { id: id, deletedAt: null },
      include: { products: true },
    });
  }

  update(id: number, updateCategoryDto) {
    return prisma.categories.update({
      where: { id: id },
      ...updateCategoryDto,
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
