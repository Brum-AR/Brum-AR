import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schemas';
import { Scooter, ScooterDocument } from "../scooter/schemas/scooter.schema";
import { User, UserDocument } from "../user/entities/user.entity";

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>
    ) {}
  async  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    createdOrder.products_id = createOrderDto.products_id;
    createdOrder.user_id = createOrderDto.user_id;
    return createdOrder.save();
  }

  async findAll() : Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  findOne(id: String) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
