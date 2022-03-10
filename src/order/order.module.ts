import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Order,OrderSchema} from "./schemas/order.schemas";

@Module({
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
