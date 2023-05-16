import { PartialType } from '@nestjs/mapped-types';
import { CreateAddtocartDto } from './create-addtocart.dto';

export class UpdateAddtocartDto extends PartialType(CreateAddtocartDto) {}
