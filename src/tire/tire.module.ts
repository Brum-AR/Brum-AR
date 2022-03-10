import { Module } from '@nestjs/common';
import { TireService } from './tire.service';
import { TireController } from './tire.controller';

@Module({
  controllers: [TireController],
  providers: [TireService]
})
export class TireModule {}
