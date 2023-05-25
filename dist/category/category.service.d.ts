export declare class CategoryService {
    addCategory(): string;
    create(createCategoryDto: any): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    findAll(): Promise<(import(".prisma/client").categories & {
        products: import(".prisma/client").products[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories & {
        products: import(".prisma/client").products[];
    }, never>;
    update(id: number, updateCategoryDto: any): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    trash(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").categories[]>;
    restore(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
