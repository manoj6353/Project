"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
let ForgotPasswordService = class ForgotPasswordService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    create(createForgotPasswordDto) {
        return;
    }
    async findOne(passwordDto, res) {
        const user = await prisma.users.findUnique({
            where: {
                email: passwordDto.email,
            },
        });
        const link = Math.random().toString(20).substring(2, 7);
        if (!user)
            throw new Error("User does not exist");
        const resetToken = crypto.randomBytes(64).toString("hex");
        const time = `${new Date().getTime() + 5 * 60000}`;
        const data = await prisma.forgotTokens.upsert({
            where: {
                userId: user.id,
            },
            update: {
                otp: link,
                expireTime: time,
            },
            create: {
                userId: user.id,
                otp: link,
                expireTime: time,
            },
        });
        const userId = user.id;
        this.mailerService.sendMail({
            to: passwordDto.email,
            from: process.env.senderEmail,
            subject: "Forgot Password Change",
            text: "Ecommerce",
            html: `<b> ${link} <b>`,
        });
        res.send(`check you mail <a href='/forgotpassword/forgotpasswordupdate?id=${userId}'>Change Password</a>`);
    }
    async updatePassword(id, passwordDto) {
        const findUser = await prisma.forgotTokens.findFirst({
            where: {
                userId: +id,
            },
        });
        const currentTime = `${new Date().getTime() / 1000}`;
        const passwordNew = passwordDto.password;
        const hashPassword = await bcrypt.hash(passwordNew, 10);
        if (findUser.otp == passwordDto.otp) {
            if (currentTime <= findUser.expireTime) {
                const updatePassword = await prisma.users.update({
                    where: {
                        id: +id,
                    },
                    data: {
                        password: hashPassword,
                    },
                });
                return { success: "Password changed" };
            }
            else {
                return { error: "OTP is expired" };
            }
        }
        else {
            return { error: "Please check your OTP" };
        }
    }
    update(id, updateForgotPasswordDto) {
        return;
    }
    remove(id) {
        return;
    }
};
ForgotPasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], ForgotPasswordService);
exports.ForgotPasswordService = ForgotPasswordService;
//# sourceMappingURL=forgot-password.service.js.map