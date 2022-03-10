import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessoryService } from './accessory.service';
import { Accessory, AccessorySchema } from './schemas/accessory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Accessory.name, schema: AccessorySchema }]),
  ],
  providers: [AccessoryService]
})
export class AccessoryModule {}
