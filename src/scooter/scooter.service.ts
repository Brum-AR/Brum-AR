import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scooter, ScooterDocument } from './schemas/scooter.schema';

@Injectable()
export class ScooterService {

  constructor(@InjectModel(Scooter.name) private scooterModel: Model<ScooterDocument>) {}

  async create(): Promise<Scooter> {

    const createdScooter = new this.scooterModel(
      {

        created_at: new Date()
      }
    )

    return createdScooter.save();
  }

  async findAll(): Promise<Scooter[]> {
    return this.scooterModel.find().select('_id name color saddle_color price').exec();
  }

  findOne(id: string) {
    return this.scooterModel.findById(id);
  }
}
