import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopCaseService } from './top_case.service';

@Controller('top-case')
export class TopCaseController {
  constructor(private readonly topCaseService: TopCaseService) {}

  @Post()
  create() {
    return this.topCaseService.create();
  }

  @Post('login')
  login() {
    
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
