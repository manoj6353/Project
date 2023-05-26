import { Module } from "@nestjs/common";
import { AddtocartService } from "./addtocart.service";
import { AddtocartController } from "./addtocart.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
export const jwtSecret = "zjP9h6ZI5LoSKCRj";
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  controllers: [AddtocartController],
  providers: [AddtocartService],
})
export class AddtocartModule {}
