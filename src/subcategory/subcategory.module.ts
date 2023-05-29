import { Module } from "@nestjs/common";
import { SubcategoryService } from "./subcategory.service";
import { SubcategoryController } from "./subcategory.controller";
import { JwtService } from "@nestjs/jwt";
@Module({
  controllers: [SubcategoryController],
  providers: [SubcategoryService, JwtService],
  exports: [SubcategoryService],
})
export class SubcategoryModule {}
