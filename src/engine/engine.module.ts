import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EngineService } from './engine.service';
import { Engine, EngineSchema } from './schemas/engine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Engine.name, schema: EngineSchema }]),
  ],
  providers: [EngineService],
  exports: [EngineService]
})
export class EngineModule {}
