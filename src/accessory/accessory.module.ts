import { Module } from '@nestjs/common';
import { AccessoryService } from './accessory.service';

@Module({
  providers: [AccessoryService]
})
export class AccessoryModule {}
