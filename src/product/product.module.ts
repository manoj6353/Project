import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { MulterModule } from "@nestjs/platform-express";
@Module({
  imports: [
    MulterModule.register({
      dest: "./image",
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
