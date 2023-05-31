import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Request } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
    findAll(req: Request): Promise<{
        data: any[];
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
    }>;
    root(): void;
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
    findOne(id: string): Promise<{
        users: {
            updatedAt: Date;
            id: number;
            firstName: string;
            lastName: string;
            contact: string;
            age: number;
            gender: string;
        };
    }>;
    findUnique(mail: string): Promise<{
        verifymail: {
            email: string;
        };
    }>;
    update(updateUserDto: UpdateUserDto): Promise<{
        data: import(".prisma/client").users;
    }>;
    remove(id: string): Promise<{
        record: import(".prisma/client").users;
    }>;
}
