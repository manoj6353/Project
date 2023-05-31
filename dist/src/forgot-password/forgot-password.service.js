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
        return "This action adds a new forgotPassword";
    }
    findAll() { }
    async findOne(passwordDto, res) {
        const user = await prisma.users.findUnique({
            where: {
                email: passwordDto.email,
            },
        });
        if (!user)
            throw new Error("User does not exist");
        let resetToken = crypto.randomBytes(64).toString("hex");
        const data = await prisma.forgotTokens.upsert({
            where: {
                userId: user.id,
            },
            update: {
                token: resetToken,
            },
            create: {
                userId: user.id,
                token: resetToken,
            },
        });
        const userId = data.id;
        const link = Math.random().toString(20).substring(2, 12);
        const cookies = { tokens: link, userId: userId };
        res.cookie("OTP", cookies, {
            expires: new Date(new Date().getTime() + 10 * 1000),
            sameSite: "strict",
            httpOnly: true,
        });
        this.mailerService.sendMail({
            to: passwordDto.email,
            from: "manoj.bajiya.2023@gmail.com",
            subject: "Forgot Password Change",
            text: "Ecommerce",
            html: `<b> ${link} <b>`,
        });
        return res.send("check you mail <a href='http://localhost:4000/forgotpassword/forgotpasswordupdate'>Change Password</a>");
    }
    async updatePassword(id, passwordDto, res, token) {
        console.log(id, passwordDto, "service");
        const findUser = await prisma.forgotTokens.findFirst({
            where: {
                userId: id,
            },
        });
        let savedToken = findUser.token;
        if (savedToken != token) {
            throw new Error("Token is not valid");
        }
        let passwordNew = passwordDto.password;
        const hashPassword = await bcrypt.hash(passwordNew, 10);
        console.log(hashPassword);
        const udatePassword = await prisma.users.update({
            where: {
                id: id,
            },
            data: {
                password: hashPassword,
            },
        });
        res.redirect("/");
    }
    update(id, updateForgotPasswordDto) {
        return `This action updates a #${id} forgotPassword`;
    }
    remove(id) {
        return `This action removes a #${id} forgotPassword`;
    }
};
ForgotPasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], ForgotPasswordService);
exports.ForgotPasswordService = ForgotPasswordService;
//# sourceMappingURL=forgot-password.service.js.map