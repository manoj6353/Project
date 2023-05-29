import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/create-auth.dto";
export declare class AuthController {
    private readonly authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(req: Request, res: Response, logindto: LoginDto): Promise<any>;
}
