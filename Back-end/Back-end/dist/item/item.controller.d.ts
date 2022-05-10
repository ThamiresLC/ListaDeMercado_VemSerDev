import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: CreateItemDto): Promise<import("./entities/item.entity").Item>;
    findAll(): Promise<import("./entities/item.entity").Item[]>;
    findOne(id: string): Promise<import("./entities/item.entity").Item>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<import("./entities/item.entity").Item>;
    remove(id: string): Promise<import("./entities/item.entity").Item>;
}
