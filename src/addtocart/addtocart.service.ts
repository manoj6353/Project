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
    return await prisma.addtocarts.create({
      data: {
        productId: productId,
        userId: UserId,
      },
    });
  }

  findAll() {
    return prisma.addtocarts.findMany({
      include: { products: true },
    });
  }

  findOne(id: number) {
    return prisma.addtocarts.findFirst({
      where: { userId: id },
      select: {
        id: true,
        productId: true,
        userId: true,
        products: {
          select: {
            productName: true,
            price: true,
          },
        },
      },
    });
  }

  update(id: number, updateAddtocartDto: UpdateAddtocartDto) {
    return `This action updates a #${id} addtocart`;
  }

  remove(id: number) {
    return `This action removes a #${id} addtocart`;
  }
}
