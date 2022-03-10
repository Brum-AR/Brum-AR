import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type EngineDocument = Engine & Document;

@Schema()
export class Engine {

    @Prop()
    type: string;

    @Prop()
    position: string;

    @Prop()
    power: string;

    @Prop()
    created_at: Date;
}
export const EngineSchema = SchemaFactory.createForClass(Engine);