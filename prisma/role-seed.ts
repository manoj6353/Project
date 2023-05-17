import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const data = await prisma.roles.create({
    data: {
      role: 'user',
    },
  });
}

main();
