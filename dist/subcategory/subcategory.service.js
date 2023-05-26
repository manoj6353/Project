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
    findOne(id) {
        return `This action returns a #${id} subcategory`;
    }
    update(id, updateSubcategoryDto) {
        return `This action updates a #${id} subcategory`;
    }
    remove(id) {
        return `This action removes a #${id} subcategory`;
    }
};
SubcategoryService = __decorate([
    (0, common_1.Injectable)()
], SubcategoryService);
exports.SubcategoryService = SubcategoryService;
//# sourceMappingURL=subcategory.service.js.map