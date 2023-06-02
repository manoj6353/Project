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
  UseGuards,
} from "@nestjs/common";
import { Request } from "express";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { AuthGuard } from "../authguard/jwt-auth-guard";
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createOrderDto: any, @Req() req: Request) {
    const id = await req.cookies.data.id;
    const data = await this.ordersService.create(createOrderDto, +id);
    return { data };
  }

  @Get()
  @UseGuards(AuthGuard)
  @Render("order")
  async findAll(@Req() req: Request) {
    const id = req.cookies.data.id;
    const data = await this.ordersService.findAll(+id);
    return { data };
  }

  // @Get(":id")
  // @UseGuards(AuthGuard)
  // findOne(@Param("id") id: string) {
  //   return this.ordersService.findOne(+id);
  // }

  // @Patch(":id")
  // @UseGuards(AuthGuard)
  // update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.ordersService.update(+id, updateOrderDto);
  // }

  // @Delete(":id")
  // @UseGuards(AuthGuard)
  // remove(@Param("id") id: string) {
  //   return this.ordersService.remove(+id);
  // }
}
