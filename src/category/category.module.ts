import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { JwtService } from "@nestjs/jwt";
@Module({
  controllers: [CategoryController],
  providers: [CategoryService, JwtService],
  exports: [CategoryService],
})
export class CategoryModule {}
