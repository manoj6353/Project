import { AddtocartService } from './addtocart.service';
import { CreateAddtocartDto } from './dto/create-addtocart.dto';
import { UpdateAddtocartDto } from './dto/update-addtocart.dto';
export declare class AddtocartController {
    private readonly addtocartService;
    constructor(addtocartService: AddtocartService);
    create(createAddtocartDto: CreateAddtocartDto): Promise<import(".prisma/client").addtocarts>;
    getcarts(userId: string, productId: string): Promise<{
        data: import(".prisma/client").addtocarts[];
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").addtocarts & {
        products: import(".prisma/client").products;
    })[]>;
    findOne(id: string): Promise<{
        data: {
            quantity: string;
            id: number;
            products: {
                productName: string;
                price: string;
            };
            userId: number;
            productId: number;
            users: {
                firstName: string;
            };
        }[];
    }>;
    update(id: string, updateAddtocartDto: UpdateAddtocartDto): Promise<import(".prisma/client").addtocarts>;
    remove(id: string): Promise<{
        data: import(".prisma/client").addtocarts;
    }>;
}
