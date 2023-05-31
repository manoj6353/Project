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
            console.log(createUserDto);
            const firstName = createUserDto.firstName || createUserDto.name.givenName;
            const lastName = createUserDto.lastName || createUserDto.name.familyName;
            const age = +createUserDto.age || "";
            const contact = createUserDto.contact || "";
            const email = createUserDto.email || createUserDto.emails[0].value;
            let password;
            if (createUserDto.password) {
                password = createUserDto.password;
            }
            else {
                password = "";
            }
            const gender = createUserDto.gender || "";
            const data = await prisma.users.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    contact: contact,
                    email: email,
                    password: password,
                    gender: gender,
                    age: +age,
                    roleId: 2,
                },
            });
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    async createadmin(createUserDto) {
        try {
            const { password, age } = createUserDto, users = __rest(createUserDto, ["password", "age"]);
            const userage = parseInt(age);
            const data = await prisma.users.create({
                data: Object.assign(Object.assign({}, users), { age: userage, password: bcrypt.hashSync(password, 11), roleId: 1 }),
            });
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    async findadminuser(query) {
        try {
            const draw = query.draw;
            const columnIndex = query.order[0]["column"];
            let columnName = query.columns[columnIndex]["data"];
            const search = query.search || "";
            const columnSort = query.order[0]["dir"];
            const start = parseInt(query.start);
            const length = parseInt(query.length);
            if (columnName == "Name") {
                columnName = "firstName";
            }
            const count = await prisma.users.count({
                where: {
                    deletedAt: null,
                    roleId: 1,
                    OR: [
                        {
                            firstName: {
                                contains: search.value,
                            },
                        },
                        {
                            lastName: {
                                contains: search.value,
                            },
                        },
                        {
                            email: {
                                contains: search.value,
                            },
                        },
                        {
                            contact: {
                                contains: search.value,
                            },
                        },
                        {
                            gender: {
                                contains: search.value,
                            },
                        },
                    ],
                },
            });
            const row = await prisma.users.findMany({
                skip: start,
                take: length,
                orderBy: {
                    [columnName]: columnSort,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    contact: true,
                    age: true,
                    email: true,
                    gender: true,
                    createdAt: true,
                },
                where: {
                    deletedAt: null,
                    roleId: 2,
                    OR: [
                        {
                            firstName: {
                                contains: search.value,
                            },
                        },
                        {
                            lastName: {
                                contains: search.value,
                            },
                        },
                        {
                            email: {
                                contains: search.value,
                            },
                        },
                        {
                            contact: {
                                contains: search.value,
                            },
                        },
                        {
                            gender: {
                                contains: search.value,
                            },
                        },
                    ],
                },
            });
            const payload = { data: [] };
            for (const data of row) {
                const views = `<a
        class="btn fas fa-edit btn-primary"
        onclick="editUser('${data.id}')"
      >
        Edit</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deleteUser('${data.id}')"
      >
        Delete</a
      >`;
                payload.data.push({
                    id: data.id,
                    Name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    contact: data.contact,
                    gender: data.gender,
                    createdAt: new Date(data.createdAt).toLocaleDateString(),
                    action: views,
                });
            }
            return Object.assign(Object.assign({}, payload), { draw,
                start, recordsFiltered: count, recordsTotal: count });
        }
        catch (err) {
            console.log(err);
        }
    }
    async findAll(query) {
        try {
            const draw = query.draw;
            const columnIndex = query.order[0]["column"];
            let columnName = query.columns[columnIndex]["data"];
            const search = query.search || "";
            const columnSort = query.order[0]["dir"];
            const start = parseInt(query.start);
            const length = parseInt(query.length);
            if (columnName == "Name") {
                columnName = "firstName";
            }
            const count = await prisma.users.count({
                where: {
                    deletedAt: null,
                    roleId: 1,
                    OR: [
                        {
                            firstName: {
                                contains: search.value,
                            },
                        },
                        {
                            lastName: {
                                contains: search.value,
                            },
                        },
                        {
                            email: {
                                contains: search.value,
                            },
                        },
                        {
                            contact: {
                                contains: search.value,
                            },
                        },
                        {
                            gender: {
                                contains: search.value,
                            },
                        },
                    ],
                },
            });
            const row = await prisma.users.findMany({
                skip: start,
                take: length,
                orderBy: {
                    [columnName]: columnSort,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    contact: true,
                    age: true,
                    email: true,
                    gender: true,
                    createdAt: true,
                },
                where: {
                    deletedAt: null,
                    roleId: 1,
                    OR: [
                        {
                            firstName: {
                                contains: search.value,
                            },
                        },
                        {
                            lastName: {
                                contains: search.value,
                            },
                        },
                        {
                            email: {
                                contains: search.value,
                            },
                        },
                        {
                            contact: {
                                contains: search.value,
                            },
                        },
                        {
                            gender: {
                                contains: search.value,
                            },
                        },
                    ],
                },
            });
            const payload = { data: [] };
            for (const data of row) {
                payload.data.push({
                    id: data.id,
                    Name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    contact: data.contact,
                    gender: data.gender,
                    createdAt: new Date(data.createdAt).toLocaleDateString(),
                });
            }
            return Object.assign(Object.assign({}, payload), { draw,
                start, recordsFiltered: count, recordsTotal: count });
        }
        catch (err) {
            console.log(err);
        }
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
        return prisma.users.findFirst({
            where: { id: id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                age: true,
                contact: true,
                gender: true,
                updatedAt: true,
            },
        });
    }
    findUnique(mail) {
        try {
            return prisma.users.findUnique({
                where: { email: mail },
                select: { email: true },
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    async update(updateUserDto) {
        const { userId, age } = updateUserDto, users = __rest(updateUserDto, ["userId", "age"]);
        const id = parseInt(userId);
        const userage = parseInt(age);
        return await prisma.users.update({
            where: { id: id },
            data: Object.assign(Object.assign({}, users), { age: userage }),
        });
    }
    async remove(id) {
        return await prisma.users.delete({ where: { id: id } });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map