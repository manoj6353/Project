"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
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
            if (array.includes(request.route.path) && payload.role == 2) {
                response.redirect("/home");
            }
            else if ((payload.role == 3 || payload.role == 1) &&
                !array.includes(request.route.path)) {
                response.redirect("/admin");
            }
        }
        catch (_a) {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=jwt-auth-guard.js.map