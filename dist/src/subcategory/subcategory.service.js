"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoryService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let SubcategoryService = class SubcategoryService {
    create(createSubcategoryDto) {
        const id = parseInt(createSubcategoryDto.categoryId);
        return prisma.subcategories.create({
            data: {
                categoryId: id,
                subCategoryName: createSubcategoryDto.subCategoryName,
            },
        });
    }
    fetchcategory() {
        try {
            return prisma.categories.findMany({
                where: { deletedAt: null },
                select: {
                    id: true,
                    categoryName: true,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async findAll() {
        return await prisma.subcategories.findMany({
            where: { deletedAt: null },
            select: {
                id: true,
                subCategoryName: true,
                createdAt: true,
                categories: {
                    select: {
                        categoryName: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await prisma.subcategories.findFirst({
            where: { id: id, deletedAt: null },
            select: {
                id: true,
                categoryId: true,
                subCategoryName: true,
            },
        });
    }
    update(updateSubcategoryDto) {
        const { id, categoryId, subCategoryName } = updateSubcategoryDto;
        const ids = parseInt(id);
        const categoryid = parseInt(categoryId);
        return prisma.subcategories.update({
            where: { id: ids },
            data: {
                subCategoryName: subCategoryName,
                categoryId: categoryid,
            },
        });
    }
    async remove(id) {
        return await prisma.subcategories.update({
            where: { id: id },
            data: {
                deletedAt: new Date(),
            },
        });
    }
};
SubcategoryService = __decorate([
    (0, common_1.Injectable)()
], SubcategoryService);
exports.SubcategoryService = SubcategoryService;
//# sourceMappingURL=subcategory.service.js.map