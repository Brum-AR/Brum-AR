import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TireDocument = Tire & Document;

@Schema()
export class Tire {

    @Prop()
    type: string;

    @Prop()
    size: string;

    @Prop()
    created_at: Date;
}

export const TireSchema = SchemaFactory.createForClass(Tire);
