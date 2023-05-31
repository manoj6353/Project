import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { OrdersService } from "./orders.service";
import { OrdersController } from "./orders.controller";
@Module({
  controllers: [OrdersController],
  providers: [OrdersService, JwtService],
})
export class OrdersModule {}
