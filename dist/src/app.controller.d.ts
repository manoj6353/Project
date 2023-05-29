import { AppService } from './app.service';
import { ProductService } from './product/product.service';
export declare class AppController {
    private readonly appService;
    private readonly productService;
    constructor(appService: AppService, productService: ProductService);
    getHello(): any;
    findAll(): Promise<{
        data: {
            id: number;
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
        }[];
    }>;
    signup(): void;
    login(): void;
}
