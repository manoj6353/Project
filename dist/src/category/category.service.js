"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let CategoryService = class CategoryService {
    addCategory() {
        return 'render';
    }
    create(createCategoryDto) {
        try {
            return prisma.categories.create({
                data: Object.assign({}, createCategoryDto),
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async findAll() {
        const data = await prisma.categories.findMany({
            include: { products: true },
            where: { deletedAt: null },
        });
        return data;
    }
    findOne(id) {
        return prisma.categories.findFirst({
            where: { id: id, deletedAt: null },
            include: { products: true },
        });
    }
    update(id, updateCategoryDto) {
        return prisma.categories.update(Object.assign({ where: { id: id } }, updateCategoryDto));
    }
    remove(id) {
        return prisma.categories.update({
            where: { id: id },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    trash() {
        try {
            return prisma.categories.findMany({
                where: { NOT: [{ deletedAt: null }] },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    restore(id) {
        try {
            return prisma.categories.update({
                where: { id: id },
                data: {
                    deletedAt: null,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)()
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map