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
            id: number;
            subCategoryName: string;
            createdAt: Date;
            categories: {
                categoryName: string;
            };
        }[];
    }>;
    findOne(id: string): string;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): string;
    remove(id: string): Promise<import(".prisma/client").subcategories>;
}
