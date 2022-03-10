import { Module } from '@nestjs/common';
import { TopCaseService } from './top_case.service';
import { TopCaseController } from './top_case.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { TopCase, TopCaseSchema } from "./schemas/top_case.schemas";



@Module({
  imports: [
    MongooseModule.forFeature([{ name: TopCase.name, schema: TopCaseSchema }]),
  ],
  controllers: [TopCaseController],
  providers: [TopCaseService]
})
export class TopCaseModule {}
