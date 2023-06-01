import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { JwtService } from "@nestjs/jwt";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
@Module({
  imports: [
    MulterModule.register({
      dest: "./image",
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtService],
  exports: [ProductService],
})
export class ProductModule {}
