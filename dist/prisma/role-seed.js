"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const data = await prisma.roles.create({
        data: {
            role: 'user',
        },
    });
}
main();
//# sourceMappingURL=role-seed.js.map