import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<void>;
    findAll(): Promise<{
        data: import(".prisma/client").categories[];
    }>;
    trash(): Promise<import(".prisma/client").categories[]>;
    findOne(id: string): Promise<import(".prisma/client").categories>;
    update(updateCategoryDto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__categoriesClient<import(".prisma/client").categories, never>;
    restore(id: string): Promise<import(".prisma/client").categories>;
}
