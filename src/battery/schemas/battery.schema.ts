import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BatteryDocument = Battery & Document;

@Schema()
export class Battery {

    @Prop()
    type: string;

    @Prop()
    brand: string;

    @Prop()
    power: string;

    @Prop()
    life: string;

    @Prop()
    max_autonomy_ECO: string;

    @Prop()
    charging_time: string;

    @Prop()
    removable: boolean;

    @Prop()
    weight: number;

    @Prop()
    created_at: Date;
}

export const BatterySchema = SchemaFactory.createForClass(Battery);
