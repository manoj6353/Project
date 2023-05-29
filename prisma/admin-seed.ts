import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();
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
