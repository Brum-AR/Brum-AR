import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BatteryService } from './battery.service';
import { Battery, BatterySchema } from './schemas/battery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Battery.name, schema: BatterySchema }]),
  ],
  providers: [BatteryService]
})
export class BatteryModule {}
