import { ForgotPasswordService } from "./forgot-password.service";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";
import { Request, Response } from "express";
export declare class ForgotPasswordController {
    private readonly forgotPasswordService;
    constructor(forgotPasswordService: ForgotPasswordService);
    renderForgotPasswordPage(): Promise<void>;
    renderForgotPasswordUpdatePage(): Promise<void>;
    sendMailerPage(createpassdto: CreateForgotPasswordDto, res: Response): Promise<any>;
    sendMailerPageUpdate(req: Request, updatepassdto: UpdateForgotPasswordDto, res: Response): Promise<void>;
    update(id: string, updateForgotPasswordDto: UpdateForgotPasswordDto): string;
    remove(id: string): string;
}
