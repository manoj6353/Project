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
            productId: number;
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
        }[];
    }>;
    findOne(id: string): Promise<{
        data: (import(".prisma/client").addtocarts & {
            products: import(".prisma/client").products;
        })[];
    }>;
    update(id: string, updateAddtocartDto: UpdateAddtocartDto): Promise<import(".prisma/client").addtocarts>;
    remove(id: string): Promise<{
        data: import(".prisma/client").addtocarts;
    }>;
}
