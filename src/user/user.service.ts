import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";
const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async create(createUserDto) {
    try {
      const firstName = createUserDto.firstName || createUserDto.name.givenName;
      const lastName = createUserDto.lastName || createUserDto.name.familyName;
      const age = +createUserDto.age || "";
      const contact = createUserDto.contact || "";
      const email = createUserDto.email || createUserDto.emails[0].value;
      let password;
      if (createUserDto.password) {
        const passwords = createUserDto.password;
        password = bcrypt.hashSync(passwords, 11);
      } else {
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
    } catch (err) {
      console.log(err);
    }
  }

  async createadmin(createUserDto) {
    try {
      const { password, age, ...users } = createUserDto;
      const userage = parseInt(age);

      const data = await prisma.users.create({
        data: {
          ...users,
          age: userage,
          password: bcrypt.hashSync(password, 11),
          roleId: 1,
        },
      });
      return data;
    } catch (err) {
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

      return {
        ...payload,
        draw,
        start,
        recordsFiltered: count,
        recordsTotal: count,
      };
    } catch (err) {
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
        payload.data.push({
          id: data.id,
          Name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          contact: data.contact,
          gender: data.gender,
          createdAt: new Date(data.createdAt).toLocaleDateString(),
        });
      }

      return {
        ...payload,
        draw,
        start,
        recordsFiltered: count,
        recordsTotal: count,
      };
    } catch (err) {
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
    } else if (data != null && pwd == false) {
      return { error: "Please check your email and password" };
    } else {
      return { success: data };
    }
  }

  findOne(id: number) {
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

  findUnique(mail: any) {
    try {
      let email;
      if (mail.emails) {
        email = mail.emails[0].value;
      } else {
        email = mail;
      }
      return prisma.users.findUnique({
        where: { email: email },
        select: { email: true },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async update(updateUserDto) {
    const { userId, age, ...users } = updateUserDto;
    const id = parseInt(userId);
    const userage = parseInt(age);
    return await prisma.users.update({
      where: { id: id },
      data: {
        ...users,
        age: userage,
      },
    });
  }

  async remove(id: number) {
    return await prisma.users.delete({ where: { id: id } });
  }
}
