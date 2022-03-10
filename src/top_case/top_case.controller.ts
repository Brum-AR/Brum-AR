import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopCaseService } from './top_case.service';
import { CreateTopCaseDto } from './dto/create-top_case.dto';
import { UpdateTopCaseDto } from './dto/update-top_case.dto';

@Controller('top-case')
export class TopCaseController {
  constructor(private readonly topCaseService: TopCaseService) {}

  @Post()
  create(@Body() createTopCaseDto: CreateTopCaseDto) {
    return this.topCaseService.create(createTopCaseDto);
  }

  @Get()
  findAll() {
    return this.topCaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topCaseService.findOne(id);
  }
}
