import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Scooter } from "../../scooter/schemas/scooter.schema";

export type OrderDocument = Order & Document;
@Schema()
export class Order {
  @Prop()
  name: string;
}
export const  OrderSchema = SchemaFactory.createForClass( Order);