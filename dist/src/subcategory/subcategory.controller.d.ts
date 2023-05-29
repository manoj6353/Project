import { SubcategoryService } from "./subcategory.service";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
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
    findAll(): Promise<{
        data: {
            createdAt: Date;
            id: number;
            categories: {
                categoryName: string;
            };
            subCategoryName: string;
        }[];
    }>;
    findOne(id: string): Promise<{
        id: number;
        categoryId: number;
        subCategoryName: string;
    }>;
    update(updateSubcategoryDto: UpdateSubcategoryDto): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    remove(id: string): Promise<import(".prisma/client").subcategories>;
}
