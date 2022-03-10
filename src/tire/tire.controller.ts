import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TireService } from './tire.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';

@Controller('tire')
export class TireController {
  constructor(private readonly tireService: TireService) {}

  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tireService.create(createTireDto);
  }

  @Get()
  findAll() {
    return this.tireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTireDto: UpdateTireDto) {
    return this.tireService.update(+id, updateTireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireService.remove(+id);
  }
}
