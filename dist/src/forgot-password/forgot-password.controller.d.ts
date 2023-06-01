import { ForgotPasswordService } from "./forgot-password.service";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";
import { Request, Response } from "express";
export declare class ForgotPasswordController {
    private readonly forgotPasswordService;
    constructor(forgotPasswordService: ForgotPasswordService);
    renderForgotPasswordPage(): Promise<void>;
    renderForgotPasswordUpdatePage(): Promise<void>;
    sendMailerPage(createpassdto: CreateForgotPasswordDto, res: Response): Promise<void>;
    sendMailerPageUpdate(req: Request, updatepassdto: UpdateForgotPasswordDto): Promise<{
        data: {
            success: string;
            error?: undefined;
        } | {
            error: string;
            success?: undefined;
        };
    }>;
    update(id: string, updateForgotPasswordDto: UpdateForgotPasswordDto): void;
    remove(id: string): void;
}
