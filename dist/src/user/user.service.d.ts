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
            id: number;
            email: string;
            password: string;
        };
        error?: undefined;
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<{
        updatedAt: Date;
        id: number;
        firstName: string;
        lastName: string;
        contact: string;
        age: number;
        gender: string;
    }, never>;
    findUnique(mail: string): import(".prisma/client").Prisma.Prisma__usersClient<{
        email: string;
    }, never>;
    update(updateUserDto: any): Promise<import(".prisma/client").users>;
    remove(id: number): Promise<import(".prisma/client").users>;
}
