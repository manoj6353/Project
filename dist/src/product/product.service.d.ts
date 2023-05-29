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
        id: number;
        productName: string;
        image: string;
        quantity: string;
        price: string;
        productdetails: string;
        createdAt: Date;
        subcategories: {
            subCategoryName: string;
        };
        productCategory: {
            categories: {
                categoryName: string;
            };
            categoryId: number;
        }[];
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__productsClient<{
        id: number;
        productName: string;
        image: string;
        quantity: string;
        price: string;
        productdetails: string;
        subcategories: {
            subCategoryName: string;
        };
        productCategory: {
            categories: {
                categoryName: string;
            };
            categoryId: number;
        }[];
        subCategoryId: number;
    }, never>;
    findsearch(productName: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").products[]>;
    update(updateProductDto: any, file: any): Promise<import(".prisma/client").products>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    restore(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
