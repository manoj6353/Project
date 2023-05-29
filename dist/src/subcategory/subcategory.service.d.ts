export declare class SubcategoryService {
    create(createSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    fetchcategory(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        categoryName: string;
    }[]>;
    findAll(): Promise<{
        createdAt: Date;
        id: number;
        categories: {
            categoryName: string;
        };
        subCategoryName: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        categoryId: number;
        subCategoryName: string;
    }>;
    update(updateSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    remove(id: number): Promise<import(".prisma/client").subcategories>;
}
