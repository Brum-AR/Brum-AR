import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrakeService } from './brake.service';
import { Brake, BrakeSchema } from './schemas/brake.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brake.name, schema: BrakeSchema }]),
  ],
  providers: [BrakeService],
  exports: [BrakeService]
})
export class BrakeModule {}
