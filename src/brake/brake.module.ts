import { Module } from '@nestjs/common';
import { BrakeService } from './brake.service';
import { BrakeController } from './brake.controller';

@Module({
  controllers: [BrakeController],
  providers: [BrakeService]
})
export class BrakeModule {}
