import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrakeService } from './brake.service';
import { CreateBrakeDto } from './dto/create-brake.dto';
import { UpdateBrakeDto } from './dto/update-brake.dto';

@Controller('brake')
export class BrakeController {
  constructor(private readonly brakeService: BrakeService) {}

  @Post()
  create(@Body() createBrakeDto: CreateBrakeDto) {
    return this.brakeService.create(createBrakeDto);
  }

  @Get()
  findAll() {
    return this.brakeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brakeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrakeDto: UpdateBrakeDto) {
    return this.brakeService.update(+id, updateBrakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brakeService.remove(+id);
  }
}
