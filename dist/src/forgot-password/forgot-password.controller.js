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
exports.ForgotPasswordController = void 0;
const common_1 = require("@nestjs/common");
const forgot_password_service_1 = require("./forgot-password.service");
const create_forgot_password_dto_1 = require("./dto/create-forgot-password.dto");
const update_forgot_password_dto_1 = require("./dto/update-forgot-password.dto");
let ForgotPasswordController = class ForgotPasswordController {
    constructor(forgotPasswordService) {
        this.forgotPasswordService = forgotPasswordService;
    }
    async renderForgotPasswordPage() {
        return;
    }
    async renderForgotPasswordUpdatePage() {
        return;
    }
    sendMailerPage(createpassdto, res) {
        return this.forgotPasswordService.findOne(createpassdto, res);
    }
    async sendMailerPageUpdate(req, updatepassdto) {
        const id = req.query.id;
        console.log(id);
        const data = await this.forgotPasswordService.updatePassword(id, updatepassdto);
        console.log(data);
        return { data };
    }
    update(id, updateForgotPasswordDto) {
        return this.forgotPasswordService.update(+id, updateForgotPasswordDto);
    }
    remove(id) {
        return this.forgotPasswordService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("forgotpassword"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "renderForgotPasswordPage", null);
__decorate([
    (0, common_1.Get)("/forgotpasswordupdate"),
    (0, common_1.Render)("forgotpasswordupdate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "renderForgotPasswordUpdatePage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_forgot_password_dto_1.CreateForgotPasswordDto, Object]),
    __metadata("design:returntype", void 0)
], ForgotPasswordController.prototype, "sendMailerPage", null);
__decorate([
    (0, common_1.Post)("/forgotpasswordupdate"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_forgot_password_dto_1.UpdateForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "sendMailerPageUpdate", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_forgot_password_dto_1.UpdateForgotPasswordDto]),
    __metadata("design:returntype", void 0)
], ForgotPasswordController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ForgotPasswordController.prototype, "remove", null);
ForgotPasswordController = __decorate([
    (0, common_1.Controller)("forgotpassword"),
    __metadata("design:paramtypes", [forgot_password_service_1.ForgotPasswordService])
], ForgotPasswordController);
exports.ForgotPasswordController = ForgotPasswordController;
//# sourceMappingURL=forgot-password.controller.js.map