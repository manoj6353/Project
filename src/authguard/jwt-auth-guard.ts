import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const token = request.cookies["auth_token"];

    if (!token) {
      response.redirect("/");
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      if (!(payload.role == 1) && !(payload.role == 2)) {
        console.log("1 and 2", payload.role);
        throw new UnauthorizedException();
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  //   private extractTokenFromHeader(request: Request): string | undefined {
  //     const [type, token] = request.headers.authorization?.split(' ') ?? [];
  //     return type === 'Bearer' ? token : undefined;
  //   }
}
