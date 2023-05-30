import { Module } from "@nestjs/common";
import { AddtocartService } from "./addtocart.service";
import { AddtocartController } from "./addtocart.controller";
@Module({
  controllers: [AddtocartController],
  providers: [AddtocartService],
})
export class AddtocartModule {}
