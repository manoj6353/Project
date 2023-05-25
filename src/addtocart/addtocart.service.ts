import { Injectable } from '@nestjs/common';
import { CreateAddtocartDto } from './dto/create-addtocart.dto';
import { UpdateAddtocartDto } from './dto/update-addtocart.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AddtocartService {
  async create(createAddtocartDto) {
    const productId = parseInt(createAddtocartDto.productId);
    const UserId = parseInt(createAddtocartDto.userId);
    // const remove = await prisma.addtocarts.delete({
    //   where: {
    //     userId: UserId,
    //   },
    // });
    return await prisma.addtocarts.create({
      data: {
        productId: productId,
        userId: UserId,
        quantity: '1',
      },
    });
  }

  findAll() {
    return prisma.addtocarts.findMany({
      include: { products: true },
    });
  }

  async findOne(id: number) {
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
