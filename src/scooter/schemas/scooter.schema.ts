import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema } from "mongoose";
import Date = module

export type ScooterDocument = Scooter & Document;

@Schema()
export class Scooter {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  max_speed: string;

  @Prop()
  cylinder: string;

  @Prop()
  license: string;

  @Prop()
  reverse_gear: boolean;

  @Prop()
  anti_theft_security: string;

  @Prop()
  crutch: string;

  @Prop()
  engine_type: string;

  @Prop()
  engine_position: string;

  @Prop()
  engine_power: string;

  @Prop()
  battery_type: string;

  @Prop()
  battery_brand: string;

  @Prop()
  battery_power: string;

  @Prop()
  battery_life: string;

  @Prop()
  battery_max_autonomy: string;

  @Prop()
  battery_charging_time: string;

  @Prop()
  battery_removable: boolean;

  @Prop()
  battery_weight: number;

  @Prop()
  framework_dimension: string;

  @Prop()
  saddle_height: string;

  @Prop()
  scooter_weight_without_battery: number;

  @Prop()
  max_weight: number;

  @Prop()
  front_suspension_type: string;

  @Prop()
  back_suspension_type: string;

  @Prop()
  assembly: string;

  @Prop()
  braking_energy_recovery: string;

  @Prop()
  brakes: string;

  @Prop()
  brakes_size: string;

  @Prop()
  stirrups_type: string;

  @Prop()
  tire_type: string;

  @Prop()
  tire_size: string;

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
  created_at: { type : Date, default: Date.now };

}

export const ScooterSchema = SchemaFactory.createForClass(Scooter);