import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AddtocartService } from "./addtocart.service";
import { AddtocartController } from "./addtocart.controller";
@Module({
  controllers: [AddtocartController],
  providers: [AddtocartService, JwtService],
})
export class AddtocartModule {}
