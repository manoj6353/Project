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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async login(loginDetails) {
        try {
            const findUser = await prisma.users.findUnique({
                where: {
                    email: loginDetails.email,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    password: true,
                    roleId: true,
                    roles: {
                        select: {
                            id: true,
                            role: true,
                        },
                    },
                },
            });
            if (findUser == null) {
                throw new common_1.NotFoundException(`Please check your email and password`);
            }
            else {
                const compare = await bcrypt.compare(loginDetails.password, findUser.password);
                if (compare) {
                    const payload = {
                        id: findUser.id,
                        role: findUser.roles.id,
                    };
                    return {
                        token: await this.jwtService.sign(payload, {
                            expiresIn: "30d",
                            algorithm: "HS256",
                            secret: process.env.JWT_SECRET,
                        }),
                        userData: findUser,
                        userRole: findUser.roles.id,
                    };
                }
                else {
                    throw new common_1.UnauthorizedException("Please check your email and password");
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async genrateCookie(token, req, res) {
        res.cookie("access_token", token, {
            expires: new Date(new Date().getTime() + 30 * 1000),
            sameSite: "strict",
            httpOnly: true,
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map