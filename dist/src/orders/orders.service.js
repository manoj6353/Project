"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let OrdersService = class OrdersService {
    async create(createOrderDto, id) {
        let result;
        for (let i = 0; i < createOrderDto.addtocart.length; i++) {
            const productid = parseInt(createOrderDto.addtocart[i].productId);
            const addressId = parseInt(createOrderDto.addressid);
            result = await prisma.orders.create({
                data: {
                    userId: id,
                    productId: productid,
                    price: createOrderDto.addtocart[i].Price,
                    quantity: createOrderDto.addtocart[i].Quantity,
                    addressesId: addressId,
                },
            });
        }
        return result;
    }
    findAll(id) {
        return prisma.orders.findMany({
            where: { userId: id },
            select: {
                quantity: true,
                id: true,
                price: true,
                createdAt: true,
                products: {
                    select: {
                        productName: true,
                        image: true,
                    },
                },
            },
        });
    }
    findOne(id) {
        return `This action returns a #${id} order`;
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map