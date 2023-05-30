export declare class CategoryService {
    addCategory(): string;
    create(createCategoryDto: any): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    findAll(query: any): Promise<{
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
        data: any[];
    }>;
    findOne(id: number): Promise<import(".prisma/client").categories>;
    update(updateCategoryDto: any): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    fetchcategory(category: string): any;
    trash(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").categories[]>;
    restore(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
