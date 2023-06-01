export class CreateForgotPasswordDto {
  email: string;
  otp: string;
  userId: number;
  expireTime: string;
}
