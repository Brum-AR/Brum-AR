import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessory, AccessoryDocument } from './schemas/accessory.schema';

@Injectable()
export class AccessoryService {

  constructor(@InjectModel(Accessory.name) private accessoryModel: Model<AccessoryDocument>) {}

  create() {
    return new this.accessoryModel(
      {
        alarm_and_geotracking: "en option",
        top_case: "en option",
        windshield: "en option",
        portable_key: "en option",
        usb_port: "inclus",
        eco_mode: "inclus",
        created_at: new Date(),
      }
    )
  }

  findAll() {
    return this.accessoryModel.find().exec();
  }

  findOne(id: number) {
    return this.accessoryModel.findById(id);
  }
}
