import { Request } from "express";
import { OrdersService } from "./orders.service";
import { UpdateOrderDto } from "./dto/update-order.dto";
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
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
