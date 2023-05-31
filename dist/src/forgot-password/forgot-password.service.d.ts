import { MailerService } from "@nestjs-modules/mailer";
import { CreateForgotPasswordDto } from "./dto/create-forgot-password.dto";
import { UpdateForgotPasswordDto } from "./dto/update-forgot-password.dto";
import { Response } from "express";
export declare class ForgotPasswordService {
    mailerService: MailerService;
    constructor(mailerService: MailerService);
    create(createForgotPasswordDto: CreateForgotPasswordDto): string;
    findAll(): void;
    findOne(passwordDto: CreateForgotPasswordDto, res: any): Promise<any>;
    updatePassword(id: any, passwordDto: any, res: Response, token: any): Promise<void>;
    update(id: number, updateForgotPasswordDto: UpdateForgotPasswordDto): string;
    remove(id: number): string;
}
