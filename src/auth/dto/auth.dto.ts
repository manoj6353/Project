import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty()
  accessToken: any;

  @ApiProperty()
  url: any;
}
