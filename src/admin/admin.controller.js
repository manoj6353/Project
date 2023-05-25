"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AdminController = void 0;
var common_1 = require("@nestjs/common");
var AdminController = /** @class */ (function () {
    function AdminController(adminService) {
        this.adminService = adminService;
    }
    AdminController.prototype.create = function (createAdminDto) {
        return this.adminService.create(createAdminDto);
    };
    AdminController.prototype.findAll = function () {
        return this.adminService.findAll();
    };
    AdminController.prototype.findOne = function (id) {
        return this.adminService.findOne(+id);
    };
    AdminController.prototype.update = function (id, updateAdminDto) {
        return this.adminService.update(+id, updateAdminDto);
    };
    AdminController.prototype.remove = function (id) {
        return this.adminService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], AdminController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], AdminController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], AdminController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], AdminController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], AdminController.prototype, "remove");
    AdminController = __decorate([
        (0, common_1.Controller)('admin')
    ], AdminController);
    return AdminController;
}());
exports.AdminController = AdminController;
