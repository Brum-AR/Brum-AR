import { Module } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { ScooterController } from './scooter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scooter, ScooterSchema } from './schemas/scooter.schema';
import { ScooterCharacteristicModule } from 'src/scooter-characteristic/scooter-characteristic.module';
import { EngineModule } from 'src/engine/engine.module';
import { BatteryModule } from 'src/battery/battery.module';
import { FrameworkModule } from 'src/framework/framework.module';
import { BrakeModule } from 'src/brake/brake.module';
import { TireModule } from 'src/tire/tire.module';
import { AccessoryModule } from 'src/accessory/accessory.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scooter.name, schema: ScooterSchema }]),
    ScooterCharacteristicModule,
    EngineModule,
    BatteryModule,
    FrameworkModule,
    BrakeModule,
    TireModule,
    AccessoryModule
  ],
  controllers: [ScooterController],
  providers: [ScooterService],
})
export class ScooterModule {}
