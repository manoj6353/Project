export declare class UserService {
    create(createUserDto: any): Promise<import(".prisma/client").users>;
    createadmin(createUserDto: any): Promise<import(".prisma/client").users>;
    findadminuser(): import(".prisma/client").Prisma.PrismaPromise<{
        age: number;
        firstName: string;
        lastName: string;
        contact: string;
        email: string;
        gender: string;
        createdAt: Date;
        id: number;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        age: number;
        firstName: string;
        lastName: string;
        contact: string;
        email: string;
        gender: string;
        createdAt: Date;
        id: number;
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<{
        age: number;
        firstName: string;
        lastName: string;
        contact: string;
        gender: string;
        updatedAt: Date;
        id: number;
    }, never>;
    findUnique(mail: string): import(".prisma/client").Prisma.Prisma__usersClient<{
        email: string;
    }, never>;
    update(updateUserDto: any): Promise<import(".prisma/client").users>;
    remove(id: number): Promise<import(".prisma/client").users>;
}
