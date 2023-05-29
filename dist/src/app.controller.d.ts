import { AppService } from "./app.service";
import { ProductService } from "./product/product.service";
export declare class AppController {
    private readonly appService;
    private readonly productService;
    constructor(appService: AppService, productService: ProductService);
    getHello(): any;
    findAll(): Promise<{
        data: {
            id: number;
            productName: string;
            price: string;
            quantity: string;
            productdetails: string;
            createdAt: Date;
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
    signup(): void;
}
