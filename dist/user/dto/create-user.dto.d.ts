declare enum Role {
    user = 0,
    admin = 1
}
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    age: string;
    contact: string;
    email: string;
    roles: Role;
    password: string;
    gender: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export {};
