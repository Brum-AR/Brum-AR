import { Module } from '@nestjs/common';
import { ScooterCharacteristicService } from './scooter-characteristic.service';

@Module({
  providers: [ScooterCharacteristicService]
})
export class ScooterCharacteristicModule {}
