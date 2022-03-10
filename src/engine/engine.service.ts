import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Engine, EngineDocument } from './schemas/engine.schema';

@Injectable()
export class EngineService {

  constructor(@InjectModel(Engine.name) private engineModel: Model<EngineDocument>) {}

  create() {
    return new this.engineModel(
        {
          type: "Bosch Brushless",
          position: "moyeu de roue arrière",
          power: "3000 Watts",
          created_at: new Date(),
        }
    )
  }

  findAll() {
    return this.engineModel.find().exec();
  }

  findOne(id: number) {
    return this.engineModel.findById(id);
  }
}
