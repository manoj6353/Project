import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { UserModule } from "../user/user.module";
@Module({
  imports: [UserModule],
  controllers: [AdminController],
  providers: [AdminService, JwtService],
})
export class AdminModule {}
