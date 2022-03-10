import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccessoryService } from 'src/accessory/accessory.service';
import { BatteryService } from 'src/battery/battery.service';
import { BrakeService } from 'src/brake/brake.service';
import { EngineService } from 'src/engine/engine.service';
import { FrameworkService } from 'src/framework/framework.service';
import { ScooterCharacteristicService } from 'src/scooter-characteristic/scooter-characteristic.service';
import { TireService } from 'src/tire/tire.service';
import { Scooter, ScooterDocument } from './schemas/scooter.schema';

@Injectable()
export class ScooterService {

  constructor(@InjectModel(Scooter.name) private scooterModel: Model<ScooterDocument>,
              private readonly scooterCharacteristicService: ScooterCharacteristicService,
              private readonly engineService: EngineService,
              private readonly batteryService: BatteryService,
              private readonly frameworkService: FrameworkService,
              private readonly brakeService: BrakeService,
              private readonly tireService: TireService,
              private readonly accessoryService: AccessoryService) {}

  async create(): Promise<Scooter> {

    const scooter_characteristics = this.scooterCharacteristicService.create();
    const engine = this.engineService.create();
    const battery = this.batteryService.create();
    const framework = this.frameworkService.create();
    const brake = this.brakeService.create();
    const tire = this.tireService.create();
    const accessory = this.accessoryService.create();

    const createdScooter = new this.scooterModel(
      {
        name: "scooter",
        price: 3200,
        color: "vert",
        saddle_color: "noir",
        scooter_characteristics: scooter_characteristics,
        engine: engine,
        battery: battery,
        framework: framework,
        brake: brake,
        tire: tire,
        accessory: accessory,
        created_at: new Date(Date.now())
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
