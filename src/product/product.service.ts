import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  async create(createProductDto, file) {
    try {
      const id = parseInt(createProductDto.categoryId);
      const subId = parseInt(createProductDto.subCategoryId);
      const data = await prisma.products.create({
        data: {
          productName: createProductDto.productName,
          price: createProductDto.price,
          quantity: createProductDto.quantity,
          productdetails: createProductDto.productdetails,
          subCategoryId: subId,
          image: file.filename,
          productCategory: {
            create: {
              categoryId: id,
            },
          },
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
        where: {
          deletedAt: null,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  fetchsubcategory(id) {
    try {
      return prisma.subcategories.findMany({
        where: { categoryId: id },
        select: {
          id: true,
          subCategoryName: true,
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
          image: true,
          subcategories: {
            select: {
              subCategoryName: true,
            },
          },
          productCategory: {
            select: {
              categoryId: true,
              categories: {
                select: {
                  categoryName: true,
                },
              },
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
        select: {
          id: true,
          productName: true,
          quantity: true,
          image: true,
          price: true,
          productdetails: true,
          subCategoryId: true,
          subcategories: {
            select: {
              subCategoryName: true,
            },
          },
          productCategory: {
            select: {
              categoryId: true,
              categories: {
                select: {
                  categoryName: true,
                },
              },
            },
          },
        },
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
      });
    } catch (err) {
      console.log(err);
    }
  }

  async update(updateProductDto, file) {
    try {
      const productId = parseInt(updateProductDto.productId);
      const oldCategoryid = parseInt(updateProductDto.oldCategoryId);
      const categoryid = parseInt(updateProductDto.categoryId);
      const subCategoryid = parseInt(updateProductDto.subCategoryId);
      await prisma.productCategory.deleteMany({
        where: { categoryId: oldCategoryid, productId: productId },
      });
      return prisma.products.update({
        where: { id: productId },
        data: {
          productName: updateProductDto.productName,
          price: updateProductDto.price,
          quantity: updateProductDto.quantity,
          productdetails: updateProductDto.productdetails,
          subCategoryId: subCategoryid,
          image: file.filename,
          productCategory: {
            create: {
              categoryId: categoryid,
            },
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  remove(id: number) {
    try {
      return prisma.products.delete({
        where: { id: id },
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
