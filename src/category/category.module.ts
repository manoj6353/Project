import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categories } from './entities/category.entity';

@Module({
  // imports: [categories],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
