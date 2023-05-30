export declare class SubcategoryService {
    create(createSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    fetchcategory(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        categoryName: string;
    }[]>;
    findAll(query: any): Promise<{
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
        data: any[];
    }>;
    findOne(id: number): Promise<{
        id: number;
        categoryId: number;
        subCategoryName: string;
    }>;
    update(updateSubcategoryDto: any): import(".prisma/client").Prisma.Prisma__subcategoriesClient<import(".prisma/client").subcategories, never>;
    remove(id: number): Promise<import(".prisma/client").subcategories>;
}
