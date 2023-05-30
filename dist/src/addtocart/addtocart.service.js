"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtocartService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let AddtocartService = class AddtocartService {
    async create(userId, productId) {
        return await prisma.addtocarts.create({
            data: {
                productId: productId,
                userId: userId,
                quantity: "1",
            },
        });
    }
    async findAll(id) {
        return await prisma.addtocarts.findMany({
            where: { userId: id },
            select: {
                id: true,
                userId: true,
                productId: true,
                quantity: true,
                products: {
                    select: {
                        productName: true,
                        price: true,
                        image: true,
                    },
                },
                users: {
                    select: {
                        firstName: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return prisma.addtocarts.findMany({
            include: { products: true },
        });
    }
    async getcart(userId, productId) {
        return await prisma.addtocarts.findMany({
            where: { userId: userId, productId: productId },
        });
    }
    async update(id, updateAddtocartDto) {
        return await prisma.addtocarts.update({
            where: { id: id },
            data: {
                quantity: updateAddtocartDto.quantity,
            },
        });
    }
    async remove(id) {
        return await prisma.addtocarts.delete({
            where: { id: id },
        });
    }
};
AddtocartService = __decorate([
    (0, common_1.Injectable)()
], AddtocartService);
exports.AddtocartService = AddtocartService;
//# sourceMappingURL=addtocart.service.js.map