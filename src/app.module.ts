import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MailerModule } from "@nestjs-modules/mailer";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { AddtocartModule } from "./addtocart/addtocart.module";
import { SubcategoryModule } from "./subcategory/subcategory.module";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { OrdersModule } from "./orders/orders.module";
import { AddressesModule } from "./addresses/addresses.module";
import { AdminModule } from "./admin/admin.module";
import { ForgotPasswordModule } from "./forgot-password/forgot-password.module";
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.senderEmail,
          pass: process.env.senderPassword,
        },
      },
    }),

    CategoryModule,
    ProductModule,
    AddtocartModule,
    SubcategoryModule,
    UserModule,
    AuthModule,
    OrdersModule,
    AddressesModule,
    AdminModule,
    ForgotPasswordModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
