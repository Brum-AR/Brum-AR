import { Injectable } from '@nestjs/common';

@Injectable()
export class ScooterCharacteristicService {
  create() {
    return 'This action adds a new scooterCharacteristic';
  }

  findAll() {
    return `This action returns all scooterCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scooterCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} scooterCharacteristic`;
  }
}
