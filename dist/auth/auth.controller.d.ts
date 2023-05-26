import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/create-auth.dto";
import { Auth } from "./dto/auth.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: LoginDto): Promise<any>;
    getProfile({ accessToken, url }: Auth): Promise<string>;
}
