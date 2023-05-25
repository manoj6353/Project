import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
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
    create(createAddressDto: CreateAddressDto): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAddressDto: UpdateAddressDto): string;
    remove(id: string): string;
}
