export declare class AddtocartService {
    create(userId: number, productId: number): Promise<import(".prisma/client").addtocarts>;
    findAll(id: number): Promise<{
        users: {
            firstName: string;
        };
        id: number;
        userId: number;
        quantity: string;
        products: {
            productName: string;
            image: string;
            price: string;
        };
        productId: number;
    }[]>;
    findOne(id: number): Promise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    getcart(userId: number, productId: number): Promise<import(".prisma/client").addtocarts[]>;
    update(id: number, updateAddtocartDto: any): Promise<import(".prisma/client").addtocarts>;
    remove(id: number): Promise<import(".prisma/client").addtocarts>;
}
