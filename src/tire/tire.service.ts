import { Injectable } from '@nestjs/common';

@Injectable()
export class TireService {
  create() {
    return 'This action adds a new tire';
  }

  findAll() {
    return `This action returns all tire`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tire`;
  }
}
