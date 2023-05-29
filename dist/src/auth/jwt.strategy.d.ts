import { Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UserService);
    validate(payload: {
        userId: number;
    }): Promise<{
        age: number;
        firstName: string;
        lastName: string;
        contact: string;
        gender: string;
        updatedAt: Date;
        id: number;
    }>;
}
export {};
