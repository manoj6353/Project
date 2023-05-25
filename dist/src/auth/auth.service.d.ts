import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(email: string, password: string): Promise<any>;
    verifytoken(accessToken: string, url: string): Promise<any>;
}
