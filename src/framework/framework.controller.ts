import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrameworkService } from './framework.service';
import { CreateFrameworkDto } from './dto/create-framework.dto';
import { UpdateFrameworkDto } from './dto/update-framework.dto';

@Controller('framework')
export class FrameworkController {
  constructor(private readonly frameworkService: FrameworkService) {}

  @Post()
  create(@Body() createFrameworkDto: CreateFrameworkDto) {
    return this.frameworkService.create(createFrameworkDto);
  }

  @Get()
  findAll() {
    return this.frameworkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frameworkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFrameworkDto: UpdateFrameworkDto) {
    return this.frameworkService.update(+id, updateFrameworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frameworkService.remove(+id);
  }
}
