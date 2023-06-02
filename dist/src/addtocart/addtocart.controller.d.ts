import { Request } from "express";
import { AddtocartService } from "./addtocart.service";
import { UpdateAddtocartDto } from "./dto/update-addtocart.dto";
export declare class AddtocartController {
    private readonly addtocartService;
    constructor(addtocartService: AddtocartService);
    create(req: Request, { productId }: any): Promise<{
        data: import(".prisma/client").addtocarts;
    }>;
    getcarts(req: Request, productId: string): Promise<{
        data: import(".prisma/client").addtocarts[];
    }>;
    findAll(req: Request): Promise<{
        data: {
            quantity: number;
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
        }[];
    }>;
    update(id: string, updateAddtocartDto: UpdateAddtocartDto): Promise<import(".prisma/client").addtocarts>;
    updates(req: Request, id: string): Promise<{
        data: import(".prisma/client").Prisma.BatchPayload;
    }>;
    remove(id: string): Promise<{
        data: import(".prisma/client").addtocarts;
    }>;
}
