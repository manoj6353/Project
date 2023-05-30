import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateSubcategoryDto } from "./dto/create-subcategory.dto";
import { UpdateSubcategoryDto } from "./dto/update-subcategory.dto";
const prisma = new PrismaClient();

@Injectable()
export class SubcategoryService {
  create(createSubcategoryDto) {
    const id = parseInt(createSubcategoryDto.categoryId);
    return prisma.subcategories.create({
      data: {
        categoryId: id,
        subCategoryName: createSubcategoryDto.subCategoryName,
      },
    });
  }

  fetchcategory() {
    try {
      return prisma.categories.findMany({
        where: { deletedAt: null },
        select: {
          id: true,
          categoryName: true,
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

      const count = await prisma.subcategories.count({
        where: {
          deletedAt: null,
          OR: [
            {
              subCategoryName: {
                contains: search.value,
              },
            },
            {
              categories: {
                categoryName: {
                  contains: search.value,
                },
              },
            },
          ],
        },
      });

      const row = await prisma.subcategories.findMany({
        skip: start,
        take: length,
        orderBy: { categories: { categoryName: columnSort } },
        select: {
          id: true,
          subCategoryName: true,
          createdAt: true,
          categoryId: true,
          categories: {
            select: {
              categoryName: true,
            },
          },
        },
        where: {
          deletedAt: null,
          OR: [
            {
              subCategoryName: {
                contains: search.value,
              },
            },
            {
              categories: {
                categoryName: {
                  contains: search.value,
                },
              },
            },
          ],
        },
      });

      const payload = { data: [] };

      for (const data of row) {
        const view = `<a
        class="btn fas fa-edit btn-primary"
        onclick="editsubCategory('${data.id}')"
      >
        EDIT</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deletesubCategory('${data.id}')"
      >
        Delete</a
      >`;
        payload.data.push({
          id: data.id,
          subCategoryName: data.subCategoryName,
          categoryName: data.categories.categoryName,
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
    return await prisma.subcategories.findFirst({
      where: { id: id, deletedAt: null },
      select: {
        id: true,
        categoryId: true,
        subCategoryName: true,
      },
    });
  }

  update(updateSubcategoryDto) {
    const { id, categoryId, subCategoryName } = updateSubcategoryDto;
    const ids = parseInt(id);
    const categoryid = parseInt(categoryId);
    return prisma.subcategories.update({
      where: { id: ids },
      data: {
        subCategoryName: subCategoryName,
        categoryId: categoryid,
      },
    });
  }

  async remove(id: number) {
    return await prisma.subcategories.update({
      where: { id: id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
