import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tire, TireDocument } from './schemas/tire.schema';

@Injectable()
export class TireService {

  constructor(@InjectModel(Tire.name) private tireModel: Model<TireDocument>) {}

  create() {
    const createdTire = new this.tireModel(
        {
          type: "route",
          size: "110-70-12",
          created_at: new Date(),
        }
    )
      createdTire.save();
      return createdTire;
  }

  findAll() {
    return this.tireModel.find().exec();
  }

  findOne(id: string) {
    return this.tireModel.findById(id);
  }
}
