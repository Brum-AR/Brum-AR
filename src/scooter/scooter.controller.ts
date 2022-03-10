import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { CreateScooterDto } from './dto/create-scooter.dto';

@Controller('scooter')
export class ScooterController {
  constructor(private readonly scooterService: ScooterService) {}

  @Post()
  create(@Body() createScooterDto: CreateScooterDto) {
    return this.scooterService.create(createScooterDto);
  }

  @Get()
  findAll() {
    return this.scooterService.findAll();
  }

  @Get('/details')
  findAllDetails() {
    return this.scooterService.findAllDetails();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scooterService.findOne(id);
  }
}
