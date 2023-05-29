import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
