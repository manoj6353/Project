import { MailerService } from "@nestjs-modules/mailer";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";
export declare class ForgotPasswordService {
    mailerService: MailerService;
    constructor(mailerService: MailerService);
    create(createForgotPasswordDto: CreateForgotPasswordDto): void;
    findOne(passwordDto: CreateForgotPasswordDto, res: any): Promise<void>;
    updatePassword(id: any, passwordDto: any): Promise<{
        success: string;
        error?: undefined;
    } | {
        error: string;
        success?: undefined;
    }>;
    update(id: number, updateForgotPasswordDto: UpdateForgotPasswordDto): void;
    remove(id: number): void;
}
