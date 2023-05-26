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
    findOne(id: number): Promise<{
        subCategoryName: string;
        id: number;
        categoryId: number;
    }>;
    update(updateSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    remove(id: number): Promise<import(".prisma/client").subcategories>;
}
