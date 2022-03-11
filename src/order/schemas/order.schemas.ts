import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Scooter } from 'src/scooter/schemas/scooter.schema';
import { TopCase } from 'src/top_case/schemas/top_case.schema';
import { User } from 'src/user/schemas/user.schema';

export type OrderDocument = Order & Document;
@Schema()
export class Order {

  @Prop()
  user : string;

  @Prop()
  scooter : string;

  @Prop()
  top_case : string;

  @Prop()
  created_at: Date;
}
export const  OrderSchema = SchemaFactory.createForClass(Order);