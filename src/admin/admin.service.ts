import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
const prisma = new PrismaClient();
@Injectable()
export class AdminService {
  create(createAdminDto: CreateAdminDto) {
    return "This action adds a new admin";
  }

  async findAll() {
    return await prisma.users.findMany({
      where: { roleId: 2 },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
