import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ScooterService } from './scooter.service';

@Controller('scooter')
export class ScooterController {
  constructor(private readonly scooterService: ScooterService) {}

  @Post()
  create(){
    //TEMPORARY
    return this.scooterService.create();
  }

  @Get()
  findAll() {
    return this.scooterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scooterService.findOne(id);
  }
}
