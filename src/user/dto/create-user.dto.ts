import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from "class-validator";

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
  roleId: number;
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
