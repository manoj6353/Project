import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async create(createProductDto) {
    try {
      const id = parseInt(createProductDto.categoryId);
      const data = await prisma.products.create({
        data: {
          productName: createProductDto.productName,
          price: createProductDto.price,
          quantity: createProductDto.quantity,
          productdetails: createProductDto.productdetails,
          categoryId: id,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
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
    try {
      return prisma.products.findMany({
        select: {
          id: true,
          productName: true,
          price: true,
          quantity: true,
          productdetails: true,
          createdAt: true,
          categories: {
            select: {
              categoryName: true,
            },
          },
        },
        where: { deletedAt: null },
      });
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    try {
      return prisma.products.findFirst({
        where: { id: id, deletedAt: null },
        include: { categories: true },
      });
    } catch (err) {
      console.log(err);
    }
  }

  findsearch(productName: string) {
    try {
      return prisma.products.findMany({
        where: {
          productName: {
            contains: productName,
          },
        },
        include: { categories: true },
      });
    } catch (err) {
      console.log(err);
    }
  }

  update(id: number, updateProductDto) {
    try {
      const id = parseInt(updateProductDto.categoryId);
      return prisma.products.update({
        where: { id: id },
        data: {
          productName: updateProductDto.productName,
          price: updateProductDto.price,
          quantity: updateProductDto.quantity,
          categoryId: id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: number) {
    try {
      return prisma.products.update({
        where: { id: id },
        data: {
          deletedAt: new Date(),
        },
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
