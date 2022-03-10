import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScooterDocument = Scooter & Document;

@Schema()
export class Scooter {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  color: string;

  @Prop()
  saddle_color: string;

  @Prop()
  created_at: Date;
}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);