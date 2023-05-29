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
exports.api_token_check_middleware = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class api_token_check_middleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async use(req, res, next) {
        try {
            console.log(req.cookies);
            const accesstoken = req.cookies.auth_token;
            const payload = await this.jwtService.verify(accesstoken);
            console.log("🚀 ~ file: api-token-check-middleware.ts:27 ~ api_token_check_middleware ~ use ~ payload:", payload);
            return next();
        }
        catch (error) {
            console.log("🚀 ~ file: api-token-check-middleware.ts:15 ~ api_token_check_middleware ~ use ~ error:", error);
        }
    }
}
__decorate([
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], api_token_check_middleware.prototype, "use", null);
exports.api_token_check_middleware = api_token_check_middleware;
function getCurrentTimeStampUnix() {
    return moment().unix();
}
//# sourceMappingURL=api-token-check-middleware.js.map