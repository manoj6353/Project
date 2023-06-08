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
                    subCategoryId: subId,
                    image: file.filename,
                    productCategory: {
                        create: {
                            categoryId: id,
                        },
                    },
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
                where: {
                    deletedAt: null,
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
    async findAll(prices = "asc", price = "price") {
        try {
            return prisma.products.findMany({
                orderBy: {
                    [price]: prices,
                },
                select: {
                    id: true,
                    productName: true,
                    price: true,
                    quantity: true,
                    productdetails: true,
                    createdAt: true,
                    image: true,
                    subcategories: {
                        select: {
                            subCategoryName: true,
                        },
                    },
                    productCategory: {
                        select: {
                            categoryId: true,
                            categories: {
                                select: {
                                    categoryName: true,
                                },
                            },
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
    async allProducts(query) {
        try {
            const draw = query.draw;
            const columnIndex = query.order[0]["column"];
            const columnName = query.columns[columnIndex]["data"];
            const search = query.search || "";
            const columnSort = query.order[0]["dir"];
            const start = parseInt(query.start);
            const length = parseInt(query.length);
            const wherequery = {
                deletedAt: null,
                OR: [
                    {
                        productName: {
                            contains: search.value,
                        },
                    },
                    {
                        price: {
                            contains: search.value,
                        },
                    },
                    {
                        quantity: {
                            contains: search.value,
                        },
                    },
                    {
                        productdetails: {
                            contains: search.value,
                        },
                    },
                    {
                        subcategories: {
                            subCategoryName: {
                                contains: search.value,
                            },
                        },
                    },
                ],
            };
            const count = await prisma.products.count({
                where: wherequery,
            });
            const products = [
                "id",
                "productName",
                "price",
                "quantity",
                " productdetails",
                "createdAt",
            ];
            const subcategory = ["subCategoryName"];
            const category = ["categoryName"];
            let tableName;
            if (products.indexOf(columnName) >= 0) {
                tableName = { [columnName]: columnSort };
            }
            else if (subcategory.indexOf(columnName) >= 0) {
                tableName = { subcategories: { [columnName]: columnSort } };
            }
            else if (category.indexOf(columnName) >= 0) {
                tableName = { subcategories: { subCategoryName: columnSort } };
            }
            const row = await prisma.products.findMany({
                skip: start,
                take: length,
                orderBy: tableName,
                select: {
                    id: true,
                    productName: true,
                    price: true,
                    quantity: true,
                    productdetails: true,
                    createdAt: true,
                    image: true,
                    subcategories: {
                        select: {
                            subCategoryName: true,
                        },
                    },
                    productCategory: {
                        select: {
                            categoryId: true,
                            categories: {
                                select: {
                                    categoryName: true,
                                },
                            },
                        },
                    },
                },
                where: wherequery,
            });
            const payload = { data: [] };
            for (const data of row) {
                let images;
                if (data.image) {
                    images = `<img src="/images/${data.image}" width="100px" height="100px" />`;
                }
                else {
                    images = "";
                }
                const view = `<a
        class="btn fas fa-edit btn-primary"
        onclick="editProduct('${data.id}')"
      >
        EDIT</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deleteProduct('${data.id}')"
      >
        Delete</a
      >`;
                payload.data.push({
                    id: data.id,
                    productName: data.productName,
                    quantity: data.quantity,
                    price: data.price,
                    image: images,
                    productDetails: data.productdetails,
                    subCategoryName: data.subcategories.subCategoryName,
                    categoryName: data.productCategory[0].categories.categoryName,
                    createdAt: new Date(data.createdAt).toLocaleDateString(),
                    action: view,
                });
            }
            return Object.assign(Object.assign({}, payload), { draw,
                start, recordsFiltered: count, recordsTotal: count });
        }
        catch (err) {
            console.log(err);
        }
    }
    findOne(id) {
        try {
            return prisma.products.findFirst({
                where: { id: id, deletedAt: null },
                select: {
                    id: true,
                    productName: true,
                    quantity: true,
                    image: true,
                    price: true,
                    productdetails: true,
                    subCategoryId: true,
                    subcategories: {
                        select: {
                            subCategoryName: true,
                        },
                    },
                    productCategory: {
                        select: {
                            categoryId: true,
                            categories: {
                                select: {
                                    categoryName: true,
                                },
                            },
                        },
                    },
                },
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
                    deletedAt: null,
                    productName: {
                        contains: productName,
                    },
                },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async update(updateProductDto, file) {
        try {
            const productId = parseInt(updateProductDto.productId);
            const oldCategoryid = parseInt(updateProductDto.oldCategoryId);
            const categoryid = parseInt(updateProductDto.categoryId);
            const subCategoryid = parseInt(updateProductDto.subCategoryId);
            const images = await prisma.products.findFirst({
                where: {
                    id: productId,
                },
                select: {
                    image: true,
                },
            });
            let image;
            if (file == undefined) {
                image = images.image;
            }
            else {
                image = file.filename;
            }
            const [deletes, data] = await prisma.$transaction([
                prisma.productCategory.deleteMany({
                    where: { categoryId: oldCategoryid, productId: productId },
                }),
                prisma.products.update({
                    where: { id: productId },
                    data: {
                        productName: updateProductDto.productName,
                        price: updateProductDto.price,
                        quantity: updateProductDto.quantity,
                        productdetails: updateProductDto.productdetails,
                        subCategoryId: subCategoryid,
                        image: image,
                        productCategory: {
                            create: {
                                categoryId: categoryid,
                            },
                        },
                    },
                }),
            ]);
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    async remove(id) {
        try {
            return await prisma.products.update({
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