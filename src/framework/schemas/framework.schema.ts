import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type FrameworkDocument = Framework & Document;

@Schema()
export class Framework {

    @Prop()
    dimension : string;

    @Prop()
    saddle_height : string;

    @Prop()
    scooter_weight_without_battery : number;

    @Prop()
    max_weight : number;

    @Prop()
    front_suspension_type : string;

    @Prop()
    back_suspension_type : string;

    @Prop()
    assembly : string;

    @Prop()
    created_at: Date;
}
export const FrameworkSchema = SchemaFactory.createForClass(Framework);