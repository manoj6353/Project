export declare class AddtocartService {
    create(userId: number, productId: number): Promise<import(".prisma/client").addtocarts>;
    findAll(id: number): Promise<{
        quantity: string;
        users: {
            firstName: string;
        };
        products: {
            productName: string;
            price: string;
            image: string;
        };
        id: number;
        userId: number;
        productId: number;
    }[]>;
    findOne(id: number): Promise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    getcart(userId: number, productId: number): Promise<import(".prisma/client").addtocarts[]>;
    update(id: number, updateAddtocartDto: any): Promise<import(".prisma/client").addtocarts>;
    remove(id: number): Promise<import(".prisma/client").addtocarts>;
}
