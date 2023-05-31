import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  Render,
  Redirect,
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { AuthGuard } from "../authguard/jwt-auth-guard";
@Controller("addresses")
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Redirect("/addtocart")
  async create(
    @Req() req: Request,
    @Body() createAddressDto: CreateAddressDto
  ) {
    const id = await req.cookies.data.id;
    const data = await this.addressesService.create(createAddressDto, +id);
    return { data };
  }

  @Get("/add")
  @UseGuards(AuthGuard)
  @Render("address")
  async fetchCountry() {
    const data = await this.addressesService.fetchCountry();
    return { data };
  }

  @Get("fetch-state/:id")
  @UseGuards(AuthGuard)
  async fetchState(@Param("id") id: string) {
    const state = await this.addressesService.fetchState(+id);
    return { state };
  }

  @Get("fetch-city/:id")
  @UseGuards(AuthGuard)
  async fetchCity(@Param("id") id: string) {
    const city = await this.addressesService.fetchCity(+id);
    return { city };
  }

  @Get()
  @UseGuards(AuthGuard)
  async findOne(@Req() req: Request) {
    const userid = await req.cookies.data.id;
    const data = await this.addressesService.findOne(userid);
    return data;
  }

  @Get("/address/:id")
  @UseGuards(AuthGuard)
  @Render("editaddress")
  async addressid(@Param("id") id: string) {
    const address = await this.addressesService.addressid(+id);
    const data = await this.addressesService.fetchCountry();
    return { address, data };
  }

  @Post("/update")
  @UseGuards(AuthGuard)
  update(@Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.update(updateAddressDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  async remove(@Param("id") id: string) {
    return await this.addressesService.remove(+id);
  }
}
