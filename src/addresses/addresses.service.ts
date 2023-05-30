import { Injectable } from "@nestjs/common";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { PrismaClient } from "@prisma/client";
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

  async create(createAddressDto, id) {
    const { countryId, stateId, cityId, userId, ...address } =
      await createAddressDto;
    const countryid = parseInt(countryId);
    const stateid = parseInt(stateId);
    const cityid = parseInt(cityId);
    return await prisma.addresses.create({
      data: {
        ...address,
        countryId: countryid,
        stateId: stateid,
        cityId: cityid,
        userId: id,
      },
    });
  }

  findAll() {
    return `This action returns all addresses`;
  }

  async findOne(id: number) {
    return prisma.addresses.findMany({
      where: { userId: id },
      select: {
        id: true,
        address1: true,
        address2: true,
        userId: true,
        pinCode: true,
        countries: {
          select: {
            name: true,
          },
        },
        states: {
          select: {
            name: true,
          },
        },
        cities: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async addressid(id: number) {
    return prisma.addresses.findFirst({
      where: { id: id },
      select: {
        id: true,
        address1: true,
        address2: true,
        userId: true,
        pinCode: true,
        countryId: true,
        stateId: true,
        cityId: true,
      },
    });
  }

  update(updateAddressDto) {
    const { id, countryId, stateId, cityId, ...address } = updateAddressDto;
    const countryid = parseInt(countryId);
    const addressid = parseInt(id);
    const stateid = parseInt(stateId);
    const cityid = parseInt(cityId);
    return prisma.addresses.update({
      where: {
        id: addressid,
      },
      data: {
        ...address,
        countryId: countryid,
        stateId: stateid,
        cityId: cityid,
      },
    });
  }

  async remove(id: number) {
    return await prisma.addresses.delete({ where: { id: id } });
  }
}
