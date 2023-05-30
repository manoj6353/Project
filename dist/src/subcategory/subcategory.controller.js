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
exports.SubcategoryController = void 0;
const common_1 = require("@nestjs/common");
const subcategory_service_1 = require("./subcategory.service");
const create_subcategory_dto_1 = require("./dto/create-subcategory.dto");
const update_subcategory_dto_1 = require("./dto/update-subcategory.dto");
let SubcategoryController = class SubcategoryController {
    constructor(subcategoryService) {
        this.subcategoryService = subcategoryService;
    }
    async addproducts() {
        const data = await this.subcategoryService.fetchcategory();
        return { data };
    }
    create(createSubcategoryDto) {
        return this.subcategoryService.create(createSubcategoryDto);
    }
    async findCategory(req) {
        const { query } = req;
        const { data, draw, start, recordsFiltered, recordsTotal } = await this.subcategoryService.findAll(query);
        return { data, draw, start, recordsFiltered, recordsTotal };
    }
    root() {
        return;
    }
    findOne(id) {
        return this.subcategoryService.findOne(+id);
    }
    update(updateSubcategoryDto) {
        return this.subcategoryService.update(updateSubcategoryDto);
    }
    async remove(id) {
        return await this.subcategoryService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)("/add"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "addproducts", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)("/subcategory"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subcategory_dto_1.CreateSubcategoryDto]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/subcategories"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "findCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("subcategoryshow"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "root", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.Redirect)("/subcategory"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_subcategory_dto_1.UpdateSubcategoryDto]),
    __metadata("design:returntype", void 0)
], SubcategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubcategoryController.prototype, "remove", null);
SubcategoryController = __decorate([
    (0, common_1.Controller)("subcategory"),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService])
], SubcategoryController);
exports.SubcategoryController = SubcategoryController;
//# sourceMappingURL=subcategory.controller.js.map