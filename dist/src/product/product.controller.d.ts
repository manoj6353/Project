/// <reference types="multer" />
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addproducts(): Promise<{
        category: {
            id: number;
            categoryName: string;
        }[];
    }>;
    fetchcategory(id: string): Promise<{
        categories: {
            id: number;
            subCategoryName: string;
        }[];
    }>;
    create(createProductDto: CreateProductDto, file: Express.Multer.File): Promise<import(".prisma/client").products>;
    findAll(): Promise<{
        categories: {
            id: number;
            categoryName: string;
        }[];
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
    category(): Promise<{
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
    findsearch(productName: string): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").products[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__productsClient<{
        id: number;
        productName: string;
        image: string;
        quantity: string;
        price: string;
        productdetails: string;
        subcategories: {
            subCategoryName: string;
        };
        productCategory: {
            categories: {
                categoryName: string;
            };
            categoryId: number;
        }[];
        subCategoryId: number;
    }, never>;
    update(updateProductDto: UpdateProductDto, file: Express.Multer.File): Promise<import(".prisma/client").products>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    restore(id: string): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
