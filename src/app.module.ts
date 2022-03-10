// @ts-ignore

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScooterModule } from './scooter/scooter.module';
import { OrderModule } from './order/order.module';
import { TopCaseModule } from './top_case/top_case.module';
import { EngineModule } from './engine/engine.module';
import { BatteryModule } from './battery/battery.module';
import { FrameworkModule } from './framework/framework.module';
import { BrakeModule } from './brake/brake.module';
import { TireModule } from './tire/tire.module';
import { AccessoryModule } from './accessory/accessory.module';
import { ScooterCharacteristicModule } from './scooter-characteristic/scooter-characteristic.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://root:root@cluster0.kpikx.mongodb.net/brumar?retryWrites=true&w=majority"),
    UserModule,
    ScooterModule,
    OrderModule,
    TopCaseModule,
    EngineModule,
    BatteryModule,
    FrameworkModule,
    BrakeModule,
    TireModule,
    AccessoryModule,
    ScooterCharacteristicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
