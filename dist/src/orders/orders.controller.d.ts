import { Request } from "express";
import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: any, req: Request): Promise<{
        data: any;
    }>;
    findAll(req: Request): Promise<{
        data: {
            quantity: string;
            id: number;
            price: string;
            totalprice: number;
            createdAt: Date;
            products: {
                productName: string;
                image: string;
            };
        }[];
    }>;
}
