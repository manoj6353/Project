import { JwtService } from "@nestjs/jwt";
export declare class AddressesService {
    private jwtService;
    constructor(jwtService: JwtService);
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
    addressid(id: number): Promise<{
        id: number;
        userId: number;
        address1: string;
        address2: string;
        countryId: number;
        stateId: number;
        cityId: number;
        pinCode: string;
    }>;
    update(updateAddressDto: any): import(".prisma/client").Prisma.Prisma__addressesClient<import(".prisma/client").addresses, never>;
    remove(id: number): Promise<import(".prisma/client").addresses>;
}
