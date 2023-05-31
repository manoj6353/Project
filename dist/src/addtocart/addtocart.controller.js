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
exports.AddtocartController = void 0;
const common_1 = require("@nestjs/common");
const addtocart_service_1 = require("./addtocart.service");
const update_addtocart_dto_1 = require("./dto/update-addtocart.dto");
const jwt_auth_guard_1 = require("../authguard/jwt-auth-guard");
let AddtocartController = class AddtocartController {
    constructor(addtocartService) {
        this.addtocartService = addtocartService;
    }
    async create(req, { productId }) {
        const id = req.cookies.data.id;
        const data = await this.addtocartService.create(+id, +productId);
        return { data };
    }
    async getcarts(req, productId) {
        const id = await req.cookies.data.id;
        const data = await this.addtocartService.getcart(+id, +productId);
        return { data };
    }
    async findAll(req) {
        const userid = await req.cookies.data.id;
        const data = await this.addtocartService.findAll(+userid);
        return { data };
    }
    async findOne(id) {
        const data = await this.addtocartService.findOne(+id);
        return { data };
    }
    update(id, updateAddtocartDto) {
        return this.addtocartService.update(+id, updateAddtocartDto);
    }
    async remove(id) {
        const data = await this.addtocartService.remove(+id);
        return { data };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddtocartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/getcart"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AddtocartController.prototype, "getcarts", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    (0, common_1.Render)("addtocart"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddtocartController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddtocartController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_addtocart_dto_1.UpdateAddtocartDto]),
    __metadata("design:returntype", void 0)
], AddtocartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddtocartController.prototype, "remove", null);
AddtocartController = __decorate([
    (0, common_1.Controller)("addtocart"),
    __metadata("design:paramtypes", [addtocart_service_1.AddtocartService])
], AddtocartController);
exports.AddtocartController = AddtocartController;
//# sourceMappingURL=addtocart.controller.js.map