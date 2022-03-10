import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FrameworkService } from './framework.service';
import { Framework, FrameworkSchema } from './schemas/framework.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Framework.name, schema: FrameworkSchema }]),
  ],
  providers: [FrameworkService],
  exports: [FrameworkService]
})
export class FrameworkModule {}
