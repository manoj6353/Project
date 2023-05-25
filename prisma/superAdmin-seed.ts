import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function Admin() {
  const data = await prisma.users.create({
    data: {
      firstName: 'Manoj',
      lastName: 'Bajiya',
      age: 21,
      contact: '9601197952',
      email: 'manoj2000bajiya@gmail.com',
      gender: 'male',
      password: bcrypt.hashSync('manoj', 11),
      roleId: 1,
    },
  });
}

Admin();
