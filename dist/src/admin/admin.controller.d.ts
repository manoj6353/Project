import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UserService } from "../user/user.service";
import { Request } from "express";
export declare class AdminController {
    private readonly adminService;
    private readonly userservice;
    constructor(adminService: AdminService, userservice: UserService);
    create(createAdminDto: CreateAdminDto): Promise<import(".prisma/client").users>;
    root(): void;
    findAll(req: Request): Promise<{
        data: any[];
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateAdminDto: UpdateAdminDto): string;
    remove(id: string): string;
}
