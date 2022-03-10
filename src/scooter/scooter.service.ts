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
    const createdScooter = new this.scooterModel(createScooterDto);
    return createdScooter.save();
  }

  async findAll(): Promise<Scooter[]> {
    return this.scooterModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} scooter`;
  }

  update(id: number, updateScooterDto: UpdateScooterDto) {
    return `This action updates a #${id} scooter`;
  }

  remove(id: number) {
    return `This action removes a #${id} scooter`;
  }
}
