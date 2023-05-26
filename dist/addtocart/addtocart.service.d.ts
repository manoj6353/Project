export declare class AddtocartService {
    create(userId: number, productId: number): Promise<import(".prisma/client").addtocarts>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    findOne(id: number): Promise<{
        quantity: string;
        id: number;
        products: {
            productName: string;
            price: string;
        };
        users: {
            firstName: string;
        };
        userId: number;
        productId: number;
    }[]>;
    getcart(userId: number, productId: number): Promise<import(".prisma/client").addtocarts[]>;
    update(id: number, updateAddtocartDto: any): Promise<import(".prisma/client").addtocarts>;
    remove(id: number): Promise<import(".prisma/client").addtocarts>;
}