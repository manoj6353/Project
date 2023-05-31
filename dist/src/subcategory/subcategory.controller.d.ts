import { SubcategoryService } from "./subcategory.service";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
import { Request } from "express";
export declare class SubcategoryController {
    private readonly subcategoryService;
    constructor(subcategoryService: SubcategoryService);
    addproducts(): Promise<{
        data: {
            id: number;
            categoryName: string;
        }[];
    }>;
    create(createSubcategoryDto: CreateSubcategoryDto): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    findCategory(req: Request): Promise<{
        data: any[];
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
    }>;
    root(): void;
    findOne(id: string): Promise<{
        id: number;
        subCategoryName: string;
        categoryId: number;
    }>;
    update(updateSubcategoryDto: UpdateSubcategoryDto): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    remove(id: string): Promise<import(".prisma/client").subcategories>;
}
