import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TopCaseDocument = TopCase & Document;
@Schema()
export class TopCase {

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  created_at: Date;
}
export const TopCaseSchema = SchemaFactory.createForClass(TopCase);