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

  async findAll() {
    // console.log("==========", req.query);

    const data = await prisma.categories.findMany({
      where: { deletedAt: null },
    });
    //   try {
    //     const basicDetail = ["first_name", "age", "image", "id"];
    //     const descDetail = ["position", "company_name", "start_date"];
    //     let length = parseInt(query.length);

    //     let column_index = query.order[0]["column"];
    //     let column_name = query.columns[column_index]["data"];
    //     let column_sort = query.order[0]["dir"];

    //     let tableName;
    //     if (basicDetail.indexOf(column_name) >= 0) {
    //       tableName = [
    //         db.sequelize.col(`basic_detail.${column_name}`),
    //         column_sort,
    //       ];
    //     } else if (descDetail.indexOf(column_name) >= 0) {
    //       tableName = [db.designation, column_name, column_sort];
    //     }
    //     const { rows, count } = await db.basic_detail.findAndCountAll({
    //       limit: length,
    //       offset: start,
    //       attributes: ["first_name", "age", "image", "id"],
    //       order: [tableName],
    //       include: [
    //         {
    //           model: db.designation,
    //           reqired: true,
    //           attributes: ["position", "company_name", "start_date"],
    //           where: {
    //             [Op.or]: [
    //               {
    //                 "$basic_detail.first_name$": {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //               {
    //                 "$basic_detail.age$": {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //               {
    //                 "$basic_detail.image$": {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //               {
    //                 position: {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //               {
    //                 company_name: {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //               {
    //                 start_date: {
    //                   [Op.like]: `%${search.value}%`,
    //                 },
    //               },
    //             ],
    //           },
    //         },
    //       ],
    //     });
    //     let payload = {};
    //     payload.data = [];
    //     for (const data of rows) {
    //       let images;
    //       let del = `<a onclick="view(${data.id})" id="delete">Delete</a>
    //       <a href="/update/?id=${data.id}" id="update">Update</a>`;
    //       if (data.image != null) {
    //         images = `<img src="/image/${data.image}" alt="image" height= "100px" width="100px">`;
    //       } else {
    //         images = "";
    //       }
    //       payload.data.push({
    //         first_name: data.first_name,
    //         position: data.designations[0].position,
    //         company_name: data.designations[0].company_name,
    //         image: images,
    //         age: data.age,
    //         action: del,
    //         start_date: data.designations[0].start_date,
    //       });
    //     }
    //     return {
    //       ...payload,
    //       draw,
    //       start,
    //       recordsFiltered: count,
    //       recordsTotal: count,
    //     };
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    //   return data;
    // }
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
