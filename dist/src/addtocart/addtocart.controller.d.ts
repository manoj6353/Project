import { JwtService } from "@nestjs/jwt";
import { AddtocartService } from "./addtocart.service";
import { UpdateAddtocartDto } from "./dto/update-addtocart.dto";
export declare class AddtocartController {
    private readonly addtocartService;
    private jwtService;
    constructor(addtocartService: AddtocartService, jwtService: JwtService);
    create(userId: string, productId: string): Promise<import(".prisma/client").addtocarts>;
    getcarts(userId: string, productId: string): Promise<{
        data: import(".prisma/client").addtocarts[];
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    findOne(id: string): Promise<{
        data: {
            id: number;
            quantity: string;
            products: {
                productName: string;
                price: string;
            };
            productId: number;
            users: {
                firstName: string;
            };
            userId: number;
        }[];
    }>;
    update(id: string, updateAddtocartDto: UpdateAddtocartDto): Promise<import(".prisma/client").addtocarts>;
    remove(id: string): Promise<{
        data: import(".prisma/client").addtocarts;
    }>;
}
