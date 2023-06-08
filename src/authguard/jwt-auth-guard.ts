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

      const array = [
        "/category/categories",
        "/category",
        "/category/fetchcategory/:category",
        "/category/trash",
        "/category/:id",
        "/product/add",
        "/product/subcategory/:id",
        "/product/products",
        "/product",
        "/product/update",
        "/product/category",
        "/product/:id",
        "/subcategory/add",
        "/subcategory/subcategories",
        "/subcategory",
        "/subcategory/:id",
        "/user/users",
        "/user",
        "/user/:id",
        "/user/email/:mail",
        "/admin",
        "/admin/adminuser",
        "/admin/:id",
        "/category/add",
        "/subcategory/update",
      ];
      if (
        array.includes(request.route.path) &&
        (payload.role == 2 || payload.role == 1)
      ) {
        response.redirect("/home");
        // throw new UnauthorizedException();
      } else if (payload.role == 3 && !array.includes(request.route.path)) {
        response.redirect("/admin");
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
