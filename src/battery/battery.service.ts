import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Battery, BatteryDocument } from './schemas/battery.schema';

@Injectable()
export class BatteryService {

  constructor(@InjectModel(Battery.name) private batteryModel: Model<BatteryDocument>) {}

  create() {
    const createdBattery = new this.batteryModel(
        {
          type: "lithium",
          brand: "Samsung",
          power: " 60 Volts",
          life: "20/40 Ah",
          max_autonomy_ECO: "45/90 km",
          charging_time: " 4 heures 30",
          removable: true,
          weight: 10,
          created_at: new Date(),
        }
    )
      createdBattery.save();
      return createdBattery;
  }

  findAll() {
    return this.batteryModel.find().exec();
  }

  findOne(id: string) {
    return this.batteryModel.findById(id);
  }
}
