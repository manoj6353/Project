/// <reference types="multer" />
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
        id: number;
        subCategoryName: string;
    }[]>;
    create(createProductDto: CreateProductDto, file: Express.Multer.File): Promise<import(".prisma/client").products>;
    findAll(): Promise<{
        data: {
            productName: string;
            quantity: string;
            price: string;
            productdetails: string;
            createdAt: Date;
            subcategories: {
                subCategoryName: string;
            };
            categories: {
                categoryName: string;
            };
            id: number;
        }[];
    }>;
    findsearch(productName: string): import(".prisma/client").Prisma.PrismaPromise<(import(".prisma/client").products & {
        categories: import(".prisma/client").categories;
    })[]>;
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__productsClient<import(".prisma/client").products, never>;
    restore(id: string): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
}
