// @ts-ignore

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScooterModule } from './scooter/scooter.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from "./product/product.module";
import { TopCaseModule } from './top_case/top_case.module';


@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://root:root@cluster0.kpikx.mongodb.net/brumar?retryWrites=true&w=majority"),
    UserModule,
    ScooterModule,
    OrderModule,
    ProductModule,
    TopCaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
