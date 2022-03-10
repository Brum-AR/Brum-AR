import { Module } from '@nestjs/common';
import { TireService } from './tire.service';

@Module({
  providers: [TireService]
})
export class TireModule {}
