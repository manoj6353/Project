import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserService {
    create(createUserDto: any): Promise<import(".prisma/client").users>;
    findAll(): string;
    login(createUserDto: any): Promise<{
        error: string;
        success?: undefined;
    } | {
        success: {
            id: number;
            email: string;
            password: string;
        };
        error?: undefined;
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users, never>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
