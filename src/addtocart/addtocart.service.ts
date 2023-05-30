import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class AddtocartService {
  async create(userId: number, productId: number) {
    return await prisma.addtocarts.create({
      data: {
        productId: productId,
        userId: userId,
        quantity: "1",
      },
    });
  }

  async findAll(id: number) {
    return await prisma.addtocarts.findMany({
      where: { userId: id },
      select: {
        id: true,
        userId: true,
        productId: true,
        quantity: true,
        products: {
          select: {
            productName: true,
            price: true,
            image: true,
          },
        },
        users: {
          select: {
            firstName: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return prisma.addtocarts.findMany({
      include: { products: true },
    });
  }

  async getcart(userId: number, productId: number) {
    return await prisma.addtocarts.findMany({
      where: { userId: userId, productId: productId },
    });
  }

  async update(id: number, updateAddtocartDto) {
    return await prisma.addtocarts.update({
      where: { id: id },
      data: {
        quantity: updateAddtocartDto.quantity,
      },
    });
  }

  async remove(id: number) {
    return await prisma.addtocarts.delete({
      where: { id: id },
    });
  }
}
