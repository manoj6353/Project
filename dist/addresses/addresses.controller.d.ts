import { AddressesService } from "./addresses.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    create(createAddressDto: CreateAddressDto): Promise<import(".prisma/client").addresses>;
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
    findAll(): string;
    findOne(id: string): Promise<{
        id: number;
        userId: number;
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
    }[]>;
    update(id: string, updateAddressDto: UpdateAddressDto): string;
    remove(id: string): string;
}
