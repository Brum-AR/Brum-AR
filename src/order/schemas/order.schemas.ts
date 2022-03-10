import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from 'mongoose';
import { Scooter } from 'src/scooter/schemas/scooter.schema';
import { TopCase } from 'src/top_case/schemas/top_case.schemas';
import { User } from 'src/user/schemas/user.schema';

export type OrderDocument = Order & Document;
@Schema()
export class Order {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user : User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Scooter' })
  scooter : Scooter;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TopCase' })
  top_case : TopCase;

  @Prop()
  created_at: Date;
}
export const  OrderSchema = SchemaFactory.createForClass(Order);