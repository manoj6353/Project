"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let CategoryService = class CategoryService {
    addCategory() {
        return "render";
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
    async findAll(query) {
        try {
            const draw = query.draw;
            const columnIndex = query.order[0]["column"];
            const columnName = query.columns[columnIndex]["data"];
            const search = query.search || "";
            const columnSort = query.order[0]["dir"];
            const start = parseInt(query.start);
            const length = parseInt(query.length);
            let columnNames;
            if (columnName.includes(".")) {
                columnNames = columnName.split(".");
            }
            const count = await prisma.categories.count({
                where: {
                    deletedAt: null,
                    OR: {
                        categoryName: {
                            contains: search.value,
                        },
                    },
                },
            });
            const row = await prisma.categories.findMany({
                skip: start,
                take: length,
                orderBy: {
                    [columnName]: columnSort,
                },
                select: {
                    id: true,
                    categoryName: true,
                    createdAt: true,
                },
                where: {
                    deletedAt: null,
                    OR: {
                        categoryName: {
                            contains: search.value,
                        },
                    },
                },
            });
            const payload = { data: [] };
            for (const data of row) {
                const view = `<a
        class="btn fas fa-edit btn-primary"
        onclick="editCategory('${data.id}')"
      >
        EDIT</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deleteCategory('${data.id}')"
      >
        Delete</a
      >`;
                payload.data.push({
                    id: data.id,
                    categoryName: data.categoryName,
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
    async findOne(id) {
        return await prisma.categories.findFirst({
            where: { id: id, deletedAt: null },
        });
    }
    update(updateCategoryDto) {
        const { id } = updateCategoryDto, category = __rest(updateCategoryDto, ["id"]);
        const ids = parseInt(id);
        return prisma.categories.update({
            where: { id: ids },
            data: Object.assign({}, category),
        });
    }
    remove(id) {
        return prisma.categories.update({
            where: { id: id },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    fetchcategory(category) {
        try {
            return prisma.categories.findFirst({ where: { categoryName: category } });
        }
        catch (err) {
            return err;
        }
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