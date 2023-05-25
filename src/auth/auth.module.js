"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = exports.jwtSecret = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var auth_controller_1 = require("./auth.controller");
var passport_1 = require("@nestjs/passport");
var jwt_1 = require("@nestjs/jwt");
var user_module_1 = require("../user/user.module");
var jwt_strategy_1 = require("./jwt.strategy");
exports.jwtSecret = 'zjP9h6ZI5LoSKCRj';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                    secret: exports.jwtSecret,
                    signOptions: { expiresIn: '5m' }
                }),
                user_module_1.UserModule,
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
