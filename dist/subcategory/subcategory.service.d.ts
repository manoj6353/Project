import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
export declare class SubcategoryService {
    create(createSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    fetchcategory(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        categoryName: string;
    }[]>;
    findAll(): Promise<{
        subCategoryName: string;
        createdAt: Date;
        categories: {
            categoryName: string;
        };
        id: number;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateSubcategoryDto: UpdateSubcategoryDto): string;
    remove(id: number): Promise<import(".prisma/client").subcategories>;
}
