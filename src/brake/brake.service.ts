import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brake, BrakeDocument } from './schemas/brake.schema';

@Injectable()
export class BrakeService {

  constructor(@InjectModel(Brake.name) private brakeModel: Model<BrakeDocument>) {}

  create() {
    return new this.brakeModel(
        {
          braking_energy_recovery: true,
          brakes: "à disque hydraulique",
          brakes_size: "190 mm",
          stirrups_type: "double pistons juxtaposés",
          created_at: new Date(),
        }
    )
  }

  findAll() {
    return this.brakeModel.find().exec();
  }

  findOne(id: number) {
    return this.brakeModel.findById(id);
  }
}
