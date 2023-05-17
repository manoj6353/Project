import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async fetchCountry() {
    const data = await prisma.countries.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return data;
  }

  async fetchState(id) {
    const data = await prisma.states.findMany({
      where: { country_id: id },
      select: {
        id: true,
        name: true,
      },
    });
    return data;
  }

  async fetchCity(id) {
    const data = await prisma.cities.findMany({
      where: { state_id: id },
      select: {
        id: true,
        name: true,
      },
    });
    return data;
  }

  async create(createUserDto) {
    try {
      const { password, age, ...users } = createUserDto;
      const userage = parseInt(age);

      const data = await prisma.users.create({
        data: {
          ...users,
          age: userage,
          password: bcrypt.hashSync(password, 11),
          roleId: 2,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
