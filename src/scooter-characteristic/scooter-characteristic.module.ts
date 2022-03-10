import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScooterCharacteristic, ScooterCharacteristicSchema } from './schemas/scooter-characteristic.schema';
import { ScooterCharacteristicService } from './scooter-characteristic.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ScooterCharacteristic.name, schema: ScooterCharacteristicSchema }]),
  ],
  providers: [ScooterCharacteristicService],
  exports: [ScooterCharacteristicService]
})
export class ScooterCharacteristicModule {}
