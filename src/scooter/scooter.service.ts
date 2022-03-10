import { Injectable } from '@nestjs/common';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scooter, ScooterDocument } from './schemas/scooter.schema';

@Injectable()
export class ScooterService {

  constructor(@InjectModel(Scooter.name) private scooterModel: Model<ScooterDocument>) {}

  async create(createScooterDto: CreateScooterDto): Promise<Scooter> {
    //const createdScooter = new this.scooterModel(createScooterDto);
    const createdScooter = new this.scooterModel(
    {
      name: "scooter",
      price: 3200,
      max_speed: "45 Km/h",
      cylinder: "50 cc",
      license: "permis AM, BSR ou permis B",
      reverse_gear: true,
      control_screen: "écran LCD",
      anti_theft_security: "batteries amovibles, guidon verrouillable, alarme",
      crutch: "centrale et latérale",
      engine_type: "Bosch Brushless",
      engine_position: "moyeu de roue arrière",
      engine_power: "3000 Watts",
      battery_type: "lithium",
      battery_brand: "Samsung",
      battery_power: " 60 Volts",
      battery_life: "20/40 Ah",
      battery_max_autonomy_ECO: "45/90 km",
      battery_charging_time: " 4 heures 30",
      battery_removable: true,
      battery_weight: 10,
      framework_dimension: "1870 mm (longueur), 1140 mm (hauteur), 700 mm (largeur)",
      saddle_height: "740 mm",
      scooter_weight_without_battery: 76,
      max_weight: 155,
      front_suspension_type: "télescopique",
      back_suspension_type: "deux combinés amortisseurs et bras oscillant",
      assembly: "znen",
      braking_energy_recovery: true,
      brakes: "à disque hydraulique",
      brakes_size: "190 mm",
      stirrups_type: "double pistons juxtaposés",
      tire_type: "route",
      tire_size: "110-70-12",
      alarm_and_geotracking: "en option",
      top_case: "en option",
      windshield: "en option",
      portable_key: "en option",
      usb_port: "inclus",
      eco_mode: "inclus",
      created_at: new Date()
    }
    )

    return createdScooter.save();
  }

  async findAll(): Promise<Scooter[]> {
    return this.scooterModel.find().select('_id name price').exec();
  }

  async findAllDetails(): Promise<Scooter[]> {
    return this.scooterModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} scooter`;
  }

  update(id: number, updateScooterDto: UpdateScooterDto) {
    return `This action updates a #${id} scooter`;
  }

  remove(id: string) {
    return this.scooterModel.findByIdAndRemove(id);
  }
}
