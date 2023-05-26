/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Render,
} from "@nestjs/common";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
@Controller("addresses")
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get("/add")
  @Render("address")
  async fetchCountry() {
    const data = await this.addressesService.fetchCountry();
    return { data };
  }

  @Get("fetch-state/:id")
  async fetchState(@Param("id") id: string) {
    const state = await this.addressesService.fetchState(+id);
    return { state };
  }

  @Get("fetch-city/:id")
  async fetchCity(@Param("id") id: string) {
    const city = await this.addressesService.fetchCity(+id);
    return { city };
  }

  @Get()
  findAll() {
    return this.addressesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    const data = await this.addressesService.findOne(id);
    return data;
  }

  @Get("/address/:id")
  @Render("editaddress")
  async addressid(@Param("id") id: string) {
    const address = await this.addressesService.addressid(+id);
    const data = await this.addressesService.fetchCountry();
    return { address, data };
  }

  @Post("/update")
  update(@Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(updateAddressDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return await this.addressesService.remove(+id);
  }
}
