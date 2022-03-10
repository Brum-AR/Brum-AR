import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




export type OrderDocument = Order & Document;
@Schema()
export class Order {

  @Prop({required:true})
  user_id : string;

  @Prop()
  scooter_id : string;
  @Prop()
  top_case_id : string;

  @Prop()
  create_at: Date;
}
export const  OrderSchema = SchemaFactory.createForClass( Order);