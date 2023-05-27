"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
let UserService = class UserService {
    async create(createUserDto) {
        try {
            const { password, age } = createUserDto, users = __rest(createUserDto, ["password", "age"]);
            const userage = parseInt(age);
            const data = await prisma.users.create({
                data: Object.assign(Object.assign({}, users), { age: userage, password: bcrypt.hashSync(password, 11), roleId: 2 }),
            });
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    findAll() {
        return prisma.users.findMany({
            where: { roleId: 2 },
            select: {
                firstName: true,
                lastName: true,
                contact: true,
                age: true,
                email: true,
                gender: true,
                createdAt: true,
            },
        });
    }
    async login(createUserDto) {
        const { email, password } = createUserDto;
        const data = await prisma.users.findFirst({
            where: { email: email },
            select: {
                id: true,
                email: true,
                password: true,
            },
        });
        let pwd;
        if (data != null) {
            pwd = await bcrypt.compare(password, data.password);
        }
        if (data == null) {
            return { error: "Please check your email and password" };
        }
        else if (data != null && pwd == false) {
            return { error: "Please check your email and password" };
        }
        else {
            return { success: data };
        }
    }
    findOne(id) {
        return prisma.users.findFirst({ where: { id: id } });
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map