import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScooterDocument = Scooter & Document;

@Schema()
export class Scooter {
  @Prop()
  name: string;
}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);