import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(createUserDto) {
    try {
      const { password, age, ...users } = createUserDto;
      const userage = parseInt(age);

      const data = await prisma.users.create({
        data: {
          ...users,
          age: userage,
          password: bcrypt.hashSync(password, 11),
          roleId: 1,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return prisma.users.findMany({
      where: { roleId: 2 },
      select: {
        firstName: true,
        lastName: true,
        contact: true,
        age: true,
        email: true,
        gender: true,
        createdAt: true,
      },
    });
  }

  async login(createUserDto) {
    const { email, password } = createUserDto;
    const data = await prisma.users.findFirst({
      where: { email: email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    let pwd;
    if (data != null) {
      pwd = await bcrypt.compare(password, data.password);
    }

    if (data == null) {
      return { error: "Please check your email and password" };
    } else if (data != null && pwd == false) {
      return { error: "Please check your email and password" };
    } else {
      return { success: data };
    }
  }

  findOne(id: number) {
    return prisma.users.findFirst({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
