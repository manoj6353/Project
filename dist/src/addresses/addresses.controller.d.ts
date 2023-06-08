import { Request } from "express";
import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    create(req: Request, createAddressDto: CreateAddressDto): Promise<{
        data: import(".prisma/client").addresses;
    }>;
    fetchCountry(): Promise<{
        data: {
            id: number;
            name: string;
        }[];
    }>;
    fetchState(id: string): Promise<{
        state: {
            id: number;
            name: string;
        }[];
    }>;
    fetchCity(id: string): Promise<{
        city: {
            id: number;
            name: string;
        }[];
    }>;
    findOne(req: Request): Promise<{
        id: number;
        address1: string;
        address2: string;
        pinCode: string;
        countries: {
            name: string;
        };
        states: {
            name: string;
        };
        cities: {
            name: string;
        };
        userId: number;
    }[]>;
    addressid(id: string): Promise<{
        address: {
            id: number;
            address1: string;
            address2: string;
            pinCode: string;
            userId: number;
            countryId: number;
            stateId: number;
            cityId: number;
        };
        data: {
            id: number;
            name: string;
        }[];
    }>;
    update(updateAddressDto: UpdateAddressDto): import(".prisma/client").Prisma.Prisma__addressesClient<import(".prisma/client").addresses, never>;
    remove(id: string): Promise<import(".prisma/client").addresses>;
}
