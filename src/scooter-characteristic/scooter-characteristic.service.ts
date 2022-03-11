import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScooterCharacteristic, ScooterCharacteristicDocument } from './schemas/scooter-characteristic.schema';

@Injectable()
export class ScooterCharacteristicService {

  constructor(@InjectModel(ScooterCharacteristic.name) private scooterCharacteristicModel: Model<ScooterCharacteristicDocument>) {}

  create() {
    const createdScooterCharacteristic = new this.scooterCharacteristicModel(
        {
          max_speed: "45 Km/h",
          cylinder: "50 cc",
          license: "permis AM, BSR ou permis B",
          reverse_gear: true,
          control_screen: "écran LCD",
          anti_theft_security: "batteries amovibles, guidon verrouillable, alarme",
          crutch: "centrale et latérale",
          created_at: new Date(),
        }
    )
      createdScooterCharacteristic.save();
      return createdScooterCharacteristic;
  }

  findAll() {
    return this.scooterCharacteristicModel.find().exec();
  }

  findOne(id: string) {
    return this.scooterCharacteristicModel.findById(id);
  }
}
