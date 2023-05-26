import { Module } from "@nestjs/common";
import { AddressesService } from "./addresses.service";
import { AddressesController } from "./addresses.controller";
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
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
