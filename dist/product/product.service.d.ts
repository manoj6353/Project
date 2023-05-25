export declare class ProductService {
    create(createProductDto: any, file: any): Promise<import(".prisma/client").products>;
    fetchcategory(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        categoryName: string;
    }[]>;
    fetchsubcategory(id: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        subCategoryName: string;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        productName: string;
        quantity: string;
        price: string;
        productdetails: string;
        createdAt: Date;
        subcategories: {
            subCategoryName: string;
        };
        categories: {
            categoryName: string;
        };
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products & {
        categories: import(".prisma/client").categories;
    }, never>;
    findsearch(productName: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").products & {
        categories: import(".prisma/client").categories;
    })[]>;
    update(id: number, updateProductDto: any): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    restore(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
