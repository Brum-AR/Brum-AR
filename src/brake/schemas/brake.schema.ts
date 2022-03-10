import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BrakeDocument = Brake & Document;

@Schema()
export class Brake {

    @Prop()
    braking_energy_recovery: string;

    @Prop()
    brakes: string;

    @Prop()
    brakes_size: string;

    @Prop()
    stirrups_type: string;

    @Prop()
    created_at: Date;
}

export const BrakeSchema = SchemaFactory.createForClass(Brake);
