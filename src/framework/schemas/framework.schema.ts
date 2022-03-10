import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type FrameworkDocument = Framework & Document;

@Schema()
export class Framework {

    @Prop()
    dimension : string;

    @Prop()
    saddle_height : number;

    @Prop()
    created_at: Date;
}
export const FrameworkSchema = SchemaFactory.createForClass(Framework);