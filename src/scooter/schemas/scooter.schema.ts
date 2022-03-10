import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Accessory } from 'src/accessory/schemas/accessory.schema';
import { Battery } from 'src/battery/schemas/battery.schema';
import { Brake } from 'src/brake/schemas/brake.schema';
import { Engine } from 'src/engine/schemas/engine.schema';
import { Framework } from 'src/framework/schemas/framework.schema';
import { ScooterCharacteristic } from 'src/scooter-characteristic/schemas/scooter-characteristic.schema';
import { Tire } from 'src/tire/schemas/tire.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ScooterCharacteristic' })
  scooter_characteristics : ScooterCharacteristic;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Engine' })
  engine : Engine;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Battery' })
  battery : Battery;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Framework' })
  framework : Framework;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brake' })
  brake : Brake;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tire' })
  tire : Tire;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Accessory' })
  accessory : Accessory;

  @Prop()
  created_at: Date;
}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);