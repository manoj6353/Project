import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from "class-validator";

enum Role {
  user,
  admin,
}
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  age: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  contact: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsEnum(Role)
  roles: Role;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  gender: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
