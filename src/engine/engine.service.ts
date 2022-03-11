import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Engine, EngineDocument } from './schemas/engine.schema';

@Injectable()
export class EngineService {

  constructor(@InjectModel(Engine.name) private engineModel: Model<EngineDocument>) {}

  create() {
    const createdEngine = new this.engineModel(
        {
          type: "Bosch Brushless",
          position: "moyeu de roue arrière",
          power: "3000 Watts",
          created_at: new Date(),
        }
    )
    createdEngine.save();
    return createdEngine;
  }

  findAll() {
    return this.engineModel.find().exec();
  }

  findOne(id: string) {
    return this.engineModel.findById(id);
  }
}
