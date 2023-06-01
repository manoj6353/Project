import { Request, Response } from "express";
import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
import { UserService } from "./user/user.service";
export declare class AppController {
    private readonly appService;
    private readonly productService;
    private readonly userService;
    constructor(appService: AppService, productService: ProductService, userService: UserService);
    getHello(): any;
    findAll(): Promise<{
        data: {
            createdAt: Date;
            id: number;
            productName: string;
            price: string;
            quantity: string;
            productdetails: string;
            image: string;
            subcategories: {
                subCategoryName: string;
            };
            productCategory: {
                categories: {
                    categoryName: string;
                };
                categoryId: number;
            }[];
        }[];
    }>;
    roots(): void;
    logout(req: Request, res: Response): Promise<void>;
    root(req: Request, res: Response): Promise<void>;
    googleRegister(): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<import(".prisma/client").users>;
    signup(): void;
}
