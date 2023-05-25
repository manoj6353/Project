"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let AddressesService = class AddressesService {
    async fetchCountry() {
        const data = await prisma.countries.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return data;
    }
    async fetchState(id) {
        const data = await prisma.states.findMany({
            where: { country_id: id },
            select: {
                id: true,
                name: true,
            },
        });
        return data;
    }
    async fetchCity(id) {
        const data = await prisma.cities.findMany({
            where: { state_id: id },
            select: {
                id: true,
                name: true,
            },
        });
        return data;
    }
    async create(createAddressDto) {
        console.log('----', createAddressDto);
        return;
    }
    findAll() {
        return `This action returns all addresses`;
    }
    findOne(id) {
        return `This action returns a #${id} address`;
    }
    update(id, updateAddressDto) {
        return `This action updates a #${id} address`;
    }
    remove(id) {
        return `This action removes a #${id} address`;
    }
};
AddressesService = __decorate([
    (0, common_1.Injectable)()
], AddressesService);
exports.AddressesService = AddressesService;
//# sourceMappingURL=addresses.service.js.map