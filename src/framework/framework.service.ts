import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Framework, FrameworkDocument } from './schemas/framework.schema';


@Injectable()
export class FrameworkService {

  constructor(@InjectModel(Framework.name) private frameworkModel: Model<FrameworkDocument>) {}

  create() {
    const createdFramework = new this.frameworkModel(
        {
          dimension: "1870 mm (longueur), 1140 mm (hauteur), 700 mm (largeur)",
          saddle_height: "740 mm",
          scooter_weight_without_battery: 76,
          max_weight: 155,
          front_suspension_type: "télescopique",
          back_suspension_type: "deux combinés amortisseurs et bras oscillant",
          assembly: "znen",
          created_at: new Date(),
        }
    )
      createdFramework.save();
      return createdFramework;
  }

  findAll() {
    return this.frameworkModel.find().exec();
  }

  findOne(id: string) {
    return this.frameworkModel.findById(id);
  }
}
