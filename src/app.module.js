"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var category_module_1 = require("./category/category.module");
var product_module_1 = require("./product/product.module");
var addtocart_module_1 = require("./addtocart/addtocart.module");
var subcategory_module_1 = require("./subcategory/subcategory.module");
var user_module_1 = require("./user/user.module");
var auth_module_1 = require("./auth/auth.module");
var orders_module_1 = require("./orders/orders.module");
var admin_module_1 = require("./admin/admin.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                category_module_1.CategoryModule,
                product_module_1.ProductModule,
                addtocart_module_1.AddtocartModule,
                subcategory_module_1.SubcategoryModule,
                user_module_1.UserModule,
                auth_module_1.AuthModule,
                orders_module_1.OrdersModule,
                admin_module_1.AdminModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
