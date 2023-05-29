"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function admin() {
    const data = await prisma.users.create({
        data: {
            firstName: "super",
            lastName: "admin",
            age: 22,
            contact: "9601197952",
            email: "admin@gmail.com",
            password: bcrypt.hashSync("admin@123", 11),
            gender: "male",
            roleId: 3,
        },
    });
}
admin();
//# sourceMappingURL=admin-seed.js.map