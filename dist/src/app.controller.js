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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const app_service_1 = require("./app.service");
const product_service_1 = require("./product/product.service");
const jwt_auth_guard_1 = require("./authguard/jwt-auth-guard");
const user_service_1 = require("./user/user.service");
const auth_service_1 = require("./auth/auth.service");
let AppController = class AppController {
    constructor(appService, productService, userService, authService, jwtService) {
        this.appService = appService;
        this.productService = productService;
        this.userService = userService;
        this.authService = authService;
        this.jwtService = jwtService;
    }
    getHello() {
        throw new Error("Method not implemented.");
    }
    async findAll() {
        const data = await this.productService.findAll();
        return { data };
    }
    async sortAll(req) {
        const price = req.query.sort;
        const data = await this.productService.findAll(`${price}`);
        return { data };
    }
    roots() {
        return;
    }
    async logout(req, res) {
        await res.clearCookie("auth_token");
        await res.clearCookie("data");
        return res.redirect("/");
    }
    async root(req, res) {
        try {
            if (req.cookies.auth_token) {
                if (req.cookies.data.role == 2 || req.cookies.data.role == 1) {
                    console.log("in role");
                    res.redirect("/home");
                }
                else {
                    res.redirect("/admin");
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async googleRegister() {
        return;
    }
    async googleAuthRedirect(req, res) {
        const emails = await this.userService.findUnique(req.user);
        if (emails != null) {
            const email = emails.email;
            const password = "";
            const login = { email, password };
            const result = await this.authService.login(login);
            if (result.token) {
                res.cookie("auth_token", result.token, { httpOnly: true });
                const payload = await this.jwtService.verifyAsync(result.token, {
                    secret: process.env.JWT_SECRET,
                });
                res.cookie("data", payload, { httpOnly: true });
            }
        }
        else {
            const { data } = await this.userService.create(req.user);
            const email = data.email;
            const password = "";
            const login = { email, password };
            const result = await this.authService.login(login);
            if (result.token) {
                res.cookie("auth_token", result.token, { httpOnly: true });
                const payload = await this.jwtService.verifyAsync(result.token, {
                    secret: process.env.JWT_SECRET,
                });
                res.cookie("data", payload, { httpOnly: true });
            }
        }
    }
    signup(req, res) {
        try {
            if (req.cookies.auth_token) {
                if (req.cookies.data.role == 2 || req.cookies.data.role == 1) {
                    console.log("in role");
                    res.redirect("/home");
                }
                else {
                    res.redirect("/admin");
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
__decorate([
    (0, common_1.Get)("/home"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    (0, common_1.Render)("index"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/home/data"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "sortAll", null);
__decorate([
    (0, common_1.Get)("/forgotpassword"),
    (0, common_1.Render)("forgotpassword"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "roots", null);
__decorate([
    (0, common_1.Get)("/logout"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("login"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)("/google"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "googleRegister", null);
__decorate([
    (0, common_1.Get)("/google/login"),
    (0, common_1.Redirect)("/home"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("google")),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)("/signup"),
    (0, common_1.Render)("registration"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "signup", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        product_service_1.ProductService,
        user_service_1.UserService,
        auth_service_1.AuthService,
        jwt_1.JwtService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map