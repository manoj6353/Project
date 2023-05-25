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
const node_localstorage_1 = require("node-localstorage");
global.localStorage = new node_localstorage_1.LocalStorage('./scratch');
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const user = await prisma.users.findFirst({ where: { email: email } });
        if (!user) {
            throw new common_1.NotFoundException(`Please check your email and password`);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Please check your email and password');
        }
        return {
            accessToken: await this.jwtService.sign({ id: user.id }),
        };
    }
    async verifytoken(accessToken, url) {
        const isAdmin = url.includes('admin');
        const { id } = await this.jwtService.verify(accessToken);
        const user = await prisma.users.findUnique({ where: { id: id } });
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException(`Please check your email and password`);
        }
        else {
            if (isAdmin && user.roles == 'admin') {
                return true;
            }
            else {
                if (!isAdmin && user.roles == 'user') {
                    return true;
                }
                return false;
            }
        }
        return false;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map