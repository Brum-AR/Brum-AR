import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schemas';
import { Scooter, ScooterDocument } from "../scooter/schemas/scooter.schema";

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>
    ) {}

  async  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    createdOrder.created_at= new Date(Date.now());
    return createdOrder.save();
  }

  async findAll() : Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }
}
