"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersService = void 0;
var common_1 = require("@nestjs/common");
var OrdersService = /** @class */ (function () {
    function OrdersService() {
    }
    OrdersService.prototype.create = function (createOrderDto) {
        return 'This action adds a new order';
    };
    OrdersService.prototype.findAll = function () {
        return "This action returns all orders";
    };
    OrdersService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " order");
    };
    OrdersService.prototype.update = function (id, updateOrderDto) {
        return "This action updates a #".concat(id, " order");
    };
    OrdersService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " order");
    };
    OrdersService = __decorate([
        (0, common_1.Injectable)()
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
