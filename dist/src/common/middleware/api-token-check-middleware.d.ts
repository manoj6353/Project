import { NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export declare class api_token_check_middleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(req: any, res: any, next: any): Promise<any>;
}
