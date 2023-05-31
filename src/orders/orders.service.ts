import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { UpdateOrderDto } from "./dto/update-order.dto";
const prisma = new PrismaClient();
@Injectable()
export class OrdersService {
  async create(createOrderDto: any, id: any) {
    let result;
    for (let i = 0; i < createOrderDto.addtocart.length; i++) {
      result = await prisma.orders.create({
        data: {
          userId: id,
          productId: +createOrderDto.addtocart[i].productId,
          price: createOrderDto.addtocart[i].Price,
          quantity: createOrderDto.addtocart[i].Quantity,
          totalprice: createOrderDto.addtocart[i].total,
          addressesId: +createOrderDto.addressid,
        },
      });
    }

    return result;
  }

  findAll(id: number) {
    return prisma.orders.findMany({
      where: { userId: id },
      select: {
        quantity: true,
        id: true,
        price: true,
        totalprice: true,
        createdAt: true,
        products: {
          select: {
            productName: true,
            image: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
