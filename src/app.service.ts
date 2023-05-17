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

  // async fetchCountry() {
  //   const data = await prisma.countries.findMany({
  //     select: {
  //       id: true,
  //       name: true,
  //     },
  //   });
  //   return data;
  // }

  // async fetchState(id) {
  //   const data = await prisma.states.findMany({
  //     where: { country_id: id },
  //     select: {
  //       id: true,
  //       name: true,
  //     },
  //   });
  //   return data;
  // }

  // async fetchCity(id) {
  //   const data = await prisma.cities.findMany({
  //     where: { state_id: id },
  //     select: {
  //       id: true,
  //       name: true,
  //     },
  //   });
  //   return data;
  // }

  // async create(createUserDto) {
  //   try {
  //     console.log(createUserDto);

  //     const data = await prisma.users.create({
  //       data: {
  //         firstName: createUserDto.firstName,
  //         lastName: createUserDto.lastName,
  //         contact: createUserDto.contact,
  //         email: createUserDto.email,
  //         age: createUserDto.age,
  //         gender: createUserDto.gender,
  //         password: createUserDto.password,
  //         roleId: 2,
  //       },
  //     });
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}
