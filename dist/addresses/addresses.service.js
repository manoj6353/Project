"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
        const _a = await createAddressDto, { countryId, stateId, cityId } = _a, address = __rest(_a, ["countryId", "stateId", "cityId"]);
        const countryid = parseInt(countryId);
        const stateid = parseInt(stateId);
        const cityid = parseInt(cityId);
        return await prisma.addresses.create({
            data: Object.assign(Object.assign({}, address), { countryId: countryid, stateId: stateid, cityId: cityid, userId: 1 }),
        });
    }
    findAll() {
        return `This action returns all addresses`;
    }
    findOne(id) {
        return prisma.addresses.findMany({
            where: { userId: id },
            select: {
                id: true,
                address1: true,
                address2: true,
                userId: true,
                pinCode: true,
                countries: {
                    select: {
                        name: true,
                    },
                },
                states: {
                    select: {
                        name: true,
                    },
                },
                cities: {
                    select: {
                        name: true,
                    },
                },
            },
        });
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