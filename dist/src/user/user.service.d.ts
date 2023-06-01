export declare class UserService {
    create(createUserDto: any): Promise<import(".prisma/client").users>;
    createadmin(createUserDto: any): Promise<import(".prisma/client").users>;
    findadminuser(query: any): Promise<{
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
        data: any[];
    }>;
    findAll(query: any): Promise<{
        draw: any;
        start: number;
        recordsFiltered: number;
        recordsTotal: number;
        data: any[];
    }>;
    login(createUserDto: any): Promise<{
        error: string;
        success?: undefined;
    } | {
        success: {
            email: string;
            password: string;
            id: number;
        };
        error?: undefined;
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<{
        firstName: string;
        lastName: string;
        contact: string;
        age: number;
        gender: string;
        updatedAt: Date;
        id: number;
    }, never>;
    findUnique(mail: any): import(".prisma/client").Prisma.Prisma__usersClient<{
        email: string;
    }, never>;
    update(updateUserDto: any): Promise<import(".prisma/client").users>;
    remove(id: number): Promise<import(".prisma/client").users>;
}
