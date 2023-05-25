"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ProductService = class ProductService {
    async create(createProductDto, file) {
        try {
            const id = parseInt(createProductDto.categoryId);
            const subId = parseInt(createProductDto.subCategoryId);
            const data = await prisma.products.create({
                data: {
                    productName: createProductDto.productName,
                    price: createProductDto.price,
                    quantity: createProductDto.quantity,
                    productdetails: createProductDto.productdetails,
                    categoryId: id,
                    subCategoryId: subId,
                    image: file.filename,
                },
            });
            return data;
        }
        catch (err) {
            console.log(err);
        }
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
    fetchsubcategory(id) {
        try {
            return prisma.subcategories.findMany({
                where: { categoryId: id },
                select: {
                    id: true,
                    subCategoryName: true,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    findAll() {
        try {
            return prisma.products.findMany({
                select: {
                    id: true,
                    productName: true,
                    price: true,
                    quantity: true,
                    productdetails: true,
                    createdAt: true,
                    categories: {
                        select: {
                            categoryName: true,
                        },
                    },
                    subcategories: {
                        select: {
                            subCategoryName: true,
                        },
                    },
                },
                where: { deletedAt: null },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    findOne(id) {
        try {
            return prisma.products.findFirst({
                where: { id: id, deletedAt: null },
                include: { categories: true },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    findsearch(productName) {
        try {
            return prisma.products.findMany({
                where: {
                    productName: {
                        contains: productName,
                    },
                },
                include: { categories: true },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    update(id, updateProductDto) {
        try {
            const id = parseInt(updateProductDto.categoryId);
            return prisma.products.update({
                where: { id: id },
                data: {
                    productName: updateProductDto.productName,
                    price: updateProductDto.price,
                    quantity: updateProductDto.quantity,
                    categoryId: id,
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    remove(id) {
        try {
            return prisma.products.update({
                where: { id: id },
                data: {
                    deletedAt: new Date(),
                },
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
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map