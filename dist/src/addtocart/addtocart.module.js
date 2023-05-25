"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtocartModule = void 0;
const common_1 = require("@nestjs/common");
const addtocart_service_1 = require("./addtocart.service");
const addtocart_controller_1 = require("./addtocart.controller");
let AddtocartModule = class AddtocartModule {
};
AddtocartModule = __decorate([
    (0, common_1.Module)({
        controllers: [addtocart_controller_1.AddtocartController],
        providers: [addtocart_service_1.AddtocartService],
    })
], AddtocartModule);
exports.AddtocartModule = AddtocartModule;
//# sourceMappingURL=addtocart.module.js.map