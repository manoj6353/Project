import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Request } from "express";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<void>;
    findCategory(req: Request): Promise<{
        data: any[];
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
    }>;
    root(): void;
    fetchcategory(category: string): Promise<{
        data: any;
    }>;
    trash(): Promise<import(".prisma/client").categories[]>;
    findOne(id: string): Promise<{
        data: import(".prisma/client").categories;
    }>;
    update(updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    restore(id: string): Promise<import(".prisma/client").categories>;
}
