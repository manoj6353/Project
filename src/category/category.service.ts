import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class CategoryService {
  addCategory() {
    return "render";
  }

  create(createCategoryDto) {
    try {
      return prisma.categories.create({
        data: {
          ...createCategoryDto,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll(query) {
    try {
      const draw = query.draw;
      const columnIndex = query.order[0]["column"];
      const columnName = query.columns[columnIndex]["data"];
      const search = query.search || "";
      const columnSort = query.order[0]["dir"];
      const start = parseInt(query.start);
      const length = parseInt(query.length);
      let columnNames;
      if (columnName.includes(".")) {
        columnNames = columnName.split(".");
      }
      const count = await prisma.categories.count({
        where: {
          deletedAt: null,
          OR: {
            categoryName: {
              contains: search.value,
            },
          },
        },
      });

      const row = await prisma.categories.findMany({
        skip: start,
        take: length,
        orderBy: {
          [columnName]: columnSort,
        },
        select: {
          id: true,
          categoryName: true,
          createdAt: true,
        },
        where: {
          deletedAt: null,
          OR: {
            categoryName: {
              contains: search.value,
            },
          },
        },
      });
      const payload = { data: [] };

      for (const data of row) {
        const view = `<a
        class="btn fas fa-edit btn-primary"
        onclick="editCategory('${data.id}')"
      >
        EDIT</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deleteCategory('${data.id}')"
      >
        Delete</a
      >`;
        payload.data.push({
          id: data.id,
          categoryName: data.categoryName,
          createdAt: new Date(data.createdAt).toLocaleDateString(),
          action: view,
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

  async findOne(id: number) {
    return await prisma.categories.findFirst({
      where: { id: id, deletedAt: null },
    });
  }

  update(updateCategoryDto) {
    const { id, ...category } = updateCategoryDto;
    const ids = parseInt(id);
    return prisma.categories.update({
      where: { id: ids },
      data: {
        ...category,
      },
    });
  }

  remove(id: number) {
    return prisma.categories.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  fetchcategory(category: string) {
    try {
      return prisma.categories.findFirst({ where: { categoryName: category } });
    } catch (err) {
      return err;
    }
  }

  trash() {
    try {
      return prisma.categories.findMany({
        where: { NOT: [{ deletedAt: null }] },
      });
    } catch (err) {
      console.log(err);
    }
  }

  restore(id: number) {
    try {
      return prisma.categories.update({
        where: { id: id },
        data: {
          deletedAt: null,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
