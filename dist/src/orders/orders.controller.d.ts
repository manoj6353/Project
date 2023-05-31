import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Request } from "express";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto, req: Request): Promise<{
        data: any;
    }>;
    findAll(req: Request): Promise<{
        data: {
            quantity: string;
            price: string;
            createdAt: Date;
            products: {
                productName: string;
                image: string;
            };
            id: number;
        }[];
    }>;
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
