import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UserService } from "../user/user.service";
export declare class AdminController {
    private readonly adminService;
    private readonly userservice;
    constructor(adminService: AdminService, userservice: UserService);
    create(createAdminDto: CreateAdminDto): Promise<import(".prisma/client").users>;
    findAll(): Promise<{
        user: {
            age: number;
            firstName: string;
            lastName: string;
            contact: string;
            email: string;
            gender: string;
            createdAt: Date;
            id: number;
        }[];
    }>;
    findOne(id: string): string;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}
