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
    findAll(prices?: string, price?: string): Promise<{
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
        id: number;
    }[]>;
    allProducts(query: any): Promise<{
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
        data: any[];
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__productsClient<{
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
        id: number;
        subCategoryId: number;
    }, never>;
    findsearch(productName: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").products[]>;
    update(updateProductDto: any, file: any): Promise<import(".prisma/client").products>;
    remove(id: number): Promise<import(".prisma/client").products>;
    restore(id: number): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
