import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrdersService {
    create(createOrderDto: any, id: any): Promise<any>;
    findAll(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        id: number;
        quantity: string;
        price: string;
        products: {
            productName: string;
            image: string;
        };
        totalprice: number;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
