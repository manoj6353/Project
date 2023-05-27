import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserService {
    create(createUserDto: any): Promise<import(".prisma/client").users>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        age: number;
        firstName: string;
        lastName: string;
        contact: string;
        email: string;
        gender: string;
        createdAt: Date;
    }[]>;
    login(createUserDto: any): Promise<{
        error: string;
        success?: undefined;
    } | {
        success: {
            password: string;
            email: string;
            id: number;
        };
        error?: undefined;
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users, never>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
