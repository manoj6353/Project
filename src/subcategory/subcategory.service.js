"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubcategoryService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var SubcategoryService = /** @class */ (function () {
    function SubcategoryService() {
    }
    SubcategoryService.prototype.create = function (createSubcategoryDto) {
        var id = parseInt(createSubcategoryDto.categoryId);
        return prisma.subcategories.create({
            data: {
                categoryId: id,
                subCategoryName: createSubcategoryDto.subCategoryName
            }
        });
    };
    SubcategoryService.prototype.fetchcategory = function () {
        try {
            return prisma.categories.findMany({
                select: {
                    id: true,
                    categoryName: true
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    SubcategoryService.prototype.findAll = function () {
        return "This action returns all subcategory";
    };
    SubcategoryService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " subcategory");
    };
    SubcategoryService.prototype.update = function (id, updateSubcategoryDto) {
        return "This action updates a #".concat(id, " subcategory");
    };
    SubcategoryService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " subcategory");
    };
    SubcategoryService = __decorate([
        (0, common_1.Injectable)()
    ], SubcategoryService);
    return SubcategoryService;
}());
exports.SubcategoryService = SubcategoryService;
