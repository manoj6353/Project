import { OrdersService } from "./orders.service";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: any, req: Request): Promise<{
        data: any;
    }>;
    findAll(req: Request): Promise<{
        data: {
            createdAt: Date;
            id: number;
            quantity: string;
            price: string;
            products: {
                productName: string;
                image: string;
            };
            totalprice: number;
        }[];
    }>;
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
