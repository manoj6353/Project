import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/create-auth.dto";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(loginDetails: LoginDto): Promise<{
        token: string;
        userData: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            roles: {
                id: number;
                role: import(".prisma/client").Role;
            };
            roleId: number;
        };
        userRole: number;
    }>;
    genrateCookie(token: any, req: any, res: any): Promise<void>;
}
