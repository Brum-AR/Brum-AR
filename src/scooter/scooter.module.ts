import { Module } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { ScooterController } from './scooter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scooter, ScooterSchema } from './schemas/scooter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scooter.name, schema: ScooterSchema }]),
  ],
  controllers: [ScooterController],
  providers: [ScooterService],
})
export class ScooterModule {}
