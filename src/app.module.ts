import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AddtocartModule } from './addtocart/addtocart.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CategoryModule, ProductModule, AddtocartModule, SubcategoryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
