"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const data = await prisma.roles.createMany({
        data: [
            {
                role: "admin",
            },
            {
                role: "user",
            },
            {
                role: "superadmin",
            },
        ],
    });
}
main();
//# sourceMappingURL=role-seed.js.map