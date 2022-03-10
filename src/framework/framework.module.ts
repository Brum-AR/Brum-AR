import { Module } from '@nestjs/common';
import { FrameworkService } from './framework.service';
import { FrameworkController } from './framework.controller';

@Module({
  controllers: [FrameworkController],
  providers: [FrameworkService]
})
export class FrameworkModule {}
