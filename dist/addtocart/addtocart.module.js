"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtocartModule = exports.jwtSecret = void 0;
const common_1 = require("@nestjs/common");
const addtocart_service_1 = require("./addtocart.service");
const addtocart_controller_1 = require("./addtocart.controller");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
exports.jwtSecret = "zjP9h6ZI5LoSKCRj";
let AddtocartModule = class AddtocartModule {
};
AddtocartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: exports.jwtSecret,
                signOptions: { expiresIn: "24h" },
            }),
        ],
        controllers: [addtocart_controller_1.AddtocartController],
        providers: [addtocart_service_1.AddtocartService],
    })
], AddtocartModule);
exports.AddtocartModule = AddtocartModule;
//# sourceMappingURL=addtocart.module.js.map