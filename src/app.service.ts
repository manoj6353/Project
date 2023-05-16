import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async findAll() {
    const data = await prisma.products.findMany({
      where: { deletedAt: null },
    });
    return data;
  }
}
