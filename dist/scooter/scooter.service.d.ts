/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { Model } from 'mongoose';
import { Scooter, ScooterDocument } from './schemas/scooter.schema';
export declare class ScooterService {
    private scooterModel;
    constructor(scooterModel: Model<ScooterDocument>);
    create(createScooterDto: CreateScooterDto): Promise<Scooter>;
    findAll(): Promise<Scooter[]>;
    findAllDetails(): Promise<Scooter[]>;
    findOne(id: number): string;
    update(id: number, updateScooterDto: UpdateScooterDto): string;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, ScooterDocument> & Scooter & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, ScooterDocument> & Scooter & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ScooterDocument>;
}
