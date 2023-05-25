import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AddressesService {
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

  async create(createAddressDto) {
    console.log('----', createAddressDto);
    return;

    // return await prisma.addresses.create({
    //   data: {
    //     ...createAddressDto,
    //     userId: 1,
    //   },
    // });
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
