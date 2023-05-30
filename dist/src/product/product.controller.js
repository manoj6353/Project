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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const platform_express_1 = require("@nestjs/platform-express");
const filefilter_middleware_1 = require("./middleware/filefilter.middleware");
const multer_1 = require("multer");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async addproducts() {
        const category = await this.productService.fetchcategory();
        return { category };
    }
    async fetchcategory(id) {
        const categories = await this.productService.fetchsubcategory(+id);
        return { categories };
    }
    async create(createProductDto, file) {
        return await this.productService.create(createProductDto, file);
    }
    async findCategory(req) {
        const { query } = req;
        const { data, draw, start, recordsFiltered, recordsTotal } = await this.productService.allProducts(query);
        return { data, draw, start, recordsFiltered, recordsTotal };
    }
    async findAll() {
        const categories = await this.productService.fetchcategory();
        return { categories };
    }
    async category() {
        const data = await this.productService.findAll();
        return { data };
    }
    findsearch(productName) {
        return this.productService.findsearch(productName);
    }
    findOne(id) {
        return this.productService.findOne(+id);
    }
    update(updateProductDto, file) {
        return this.productService.update(updateProductDto, file);
    }
    remove(id) {
        return this.productService.remove(+id);
    }
    restore(id) {
        return this.productService.restore(+id);
    }
};
__decorate([
    (0, common_1.Get)("/add"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addproducts", null);
__decorate([
    (0, common_1.Get)("/subcategory/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "fetchcategory", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)("/product"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./public/images",
            filename: filefilter_middleware_1.editFileName,
        }),
        fileFilter: filefilter_middleware_1.imageFileFilter,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/products"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("productshow"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/category"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "category", null);
__decorate([
    (0, common_1.Get)("search/:productName"),
    __param(0, (0, common_1.Param)("productName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findsearch", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.Redirect)("/product"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./public/images",
            filename: filefilter_middleware_1.editFileName,
        }),
        fileFilter: filefilter_middleware_1.imageFileFilter,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)("/trash/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "restore", null);
ProductController = __decorate([
    (0, common_1.Controller)("product"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map