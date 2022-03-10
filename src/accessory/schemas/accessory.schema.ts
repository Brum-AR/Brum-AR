import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AccessoryDocument = Accessory & Document;

@Schema()
export class Accessory {

    @Prop()
    alarm_and_geotracking: string;

    @Prop()
    top_case: string;

    @Prop()
    windshield: string;

    @Prop()
    portable_key: string;

    @Prop()
    usb_port: string;

    @Prop()
    eco_mode: string;

    @Prop()
    created_at: Date;
}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);
