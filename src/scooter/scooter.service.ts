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

  async create() {

    /*const scooter_characteristics = this.scooterCharacteristicService.create();
    const engine = this.engineService.create();
    const battery = this.batteryService.create();
    const framework = this.frameworkService.create();
    const brake = this.brakeService.create();
    const tire = this.tireService.create();
    const accessory = this.accessoryService.create();

    const createdScooter = new this.scooterModel(
      {
        name: "Scooter",
        price: 3200,
        color: "Gris",
          // Vert Bleu Beige Gris
        saddle_color: "Noir",
          // Beige Noir
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
    */
     return {
         "statusCode": 403,
         "message": "You don't have the right to access this endpoint.",
         "error": "Forbidden"
     };
  }

  async findAll() {
    return this.scooterModel.find().select('_id name color saddle_color price').exec();
  }

  async findOne(id: string) {
      const retrievedScooter = await this.scooterModel.findById(id);
      const retrievedScooterCharacteristic = await this.scooterCharacteristicService.findOne("622ad23074c0da8ffadb0216");
      const retrievedEngine = await this.engineService.findOne("622ad23074c0da8ffadb0217");
      const retrievedBattery = await this.batteryService.findOne("622ad23074c0da8ffadb0218");
      const retrievedFramework = await this.frameworkService.findOne("622ad23074c0da8ffadb0219");
      const retrievedBrake = await this.brakeService.findOne("622ad23074c0da8ffadb021a");
      const retrievedTire = await this.tireService.findOne("622ad23074c0da8ffadb021b");
      const retrievedAccessory = await this.accessoryService.findOne("622ad23074c0da8ffadb021c");

        return {
            "_id": id,
            "name": retrievedScooter.name,
            "price": retrievedScooter.price,
            "color": retrievedScooter.color,
            "saddle_color": retrievedScooter.saddle_color,
            "scooter_characteristics":
                {
                    "max_speed": retrievedScooterCharacteristic.max_speed ,
                    "cylinder": retrievedScooterCharacteristic.cylinder,
                    "license": retrievedScooterCharacteristic.license,
                    "reverse_gear": retrievedScooterCharacteristic.reverse_gear,
                    "control_screen": retrievedScooterCharacteristic.control_screen,
                    "anti_theft_security": retrievedScooterCharacteristic.anti_theft_security,
                    "crutch": retrievedScooterCharacteristic.crutch
                },
            "engine":
                {
                    "type": retrievedEngine.type,
                    "position": retrievedEngine.position,
                    "power": retrievedEngine.power
                },
            "battery":
                {
                    "type": retrievedBattery.type,
                    "brand": retrievedBattery.brand,
                    "power": retrievedBattery.power,
                    "life": retrievedBattery.life,
                    "max_autonomy_ECO": retrievedBattery.max_autonomy_ECO,
                    "charging_time": retrievedBattery.charging_time,
                    "removable": retrievedBattery.removable,
                    "weight": retrievedBattery.weight
                },
            "framework":
                {
                    "dimension": retrievedFramework.dimension,
                    "saddle_height": retrievedFramework.saddle_height,
                    "scooter_weight_without_battery": retrievedFramework.scooter_weight_without_battery,
                    "max_weight": retrievedFramework.max_weight,
                    "front_suspension_type": retrievedFramework.front_suspension_type,
                    "back_suspension_type": retrievedFramework.back_suspension_type,
                    "assembly": retrievedFramework.assembly
                },
            "brake":
                {
                    "braking_energy_recovery": retrievedBrake.braking_energy_recovery,
                    "brakes": retrievedBrake.brakes,
                    "brakes_size": retrievedBrake.brakes_size,
                    "stirrups_type": retrievedBrake.stirrups_type
                },
            "tire":
                {
                    "type": retrievedTire.type,
                    "size": retrievedTire.size
                },
            "accessory":
                {
                    "alarm_and_geotracking": retrievedAccessory.alarm_and_geotracking,
                    "top_case": retrievedAccessory.top_case,
                    "windshield": retrievedAccessory.windshield,
                    "portable_key": retrievedAccessory.portable_key,
                    "usb_port": retrievedAccessory.usb_port,
                    "eco_mode": retrievedAccessory.eco_mode
                }
        }
  }
}
