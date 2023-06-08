export declare class AddtocartService {
    create(userId: number, productId: number): Promise<import(".prisma/client").addtocarts>;
    findAll(id: number): Promise<{
        id: number;
        quantity: number;
        products: {
            productName: string;
            price: string;
            image: string;
        };
        productId: number;
        users: {
            firstName: string;
        };
        userId: number;
    }[]>;
    findOne(id: number): Promise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    getcart(userId: number, productId: number): Promise<import(".prisma/client").addtocarts[]>;
    update(id: number, updateAddtocartDto: any): Promise<import(".prisma/client").addtocarts>;
    updates(id: number, userId: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: number): Promise<import(".prisma/client").addtocarts>;
}
