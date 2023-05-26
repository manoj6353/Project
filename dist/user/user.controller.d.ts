import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
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
    findOne(id: string): void;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
