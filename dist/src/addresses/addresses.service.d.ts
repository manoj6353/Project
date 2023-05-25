import { UpdateAddressDto } from './dto/update-address.dto';
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
    create(createAddressDto: any): Promise<void>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): string;
}
