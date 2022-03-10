/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { ScooterService } from './scooter.service';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
export declare class ScooterController {
    private readonly scooterService;
    constructor(scooterService: ScooterService);
    create(createScooterDto: CreateScooterDto): Promise<import("./schemas/scooter.schema").Scooter>;
    findAll(): Promise<import("./schemas/scooter.schema").Scooter[]>;
    findAllDetails(): Promise<import("./schemas/scooter.schema").Scooter[]>;
    findOne(id: string): string;
    update(id: string, updateScooterDto: UpdateScooterDto): string;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("./schemas/scooter.schema").ScooterDocument> & import("./schemas/scooter.schema").Scooter & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("./schemas/scooter.schema").ScooterDocument> & import("./schemas/scooter.schema").Scooter & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/scooter.schema").ScooterDocument>;
}
