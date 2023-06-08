import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
export declare class AppController {
    private readonly appService;
    private readonly productService;
    private readonly userService;
    private readonly authService;
    private jwtService;
    constructor(appService: AppService, productService: ProductService, userService: UserService, authService: AuthService, jwtService: JwtService);
    getHello(): any;
    findAll(): Promise<{
        data: {
            productName: string;
            image: string;
            quantity: string;
            price: string;
            productdetails: string;
            createdAt: Date;
            subcategories: {
                subCategoryName: string;
            };
            productCategory: {
                categories: {
                    categoryName: string;
                };
                categoryId: number;
            }[];
            id: number;
        }[];
    }>;
    sortAll(req: Request): Promise<{
        data: {
            productName: string;
            image: string;
            quantity: string;
            price: string;
            productdetails: string;
            createdAt: Date;
            subcategories: {
                subCategoryName: string;
            };
            productCategory: {
                categories: {
                    categoryName: string;
                };
                categoryId: number;
            }[];
            id: number;
        }[];
    }>;
    roots(): void;
    logout(req: Request, res: Response): Promise<void>;
    root(req: Request, res: Response): Promise<void>;
    googleRegister(): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<void>;
    signup(req: Request, res: Response): void;
}
