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
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
