import { UpdateAddressDto } from "./dto/update-address.dto";
export declare class AddressesService {
    fetchCountry(): Promise<{
        id: number;
        name: string;
    }[]>;
    fetchState(id: any): Promise<{
        id: number;
        name: string;
    }[]>;
    fetchCity(id: any): Promise<{
        id: number;
        name: string;
    }[]>;
    create(createAddressDto: any): Promise<import(".prisma/client").addresses>;
    findAll(): string;
    findOne(id: number): import(".prisma/client").Prisma.PrismaPromise<{
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
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): string;
}
