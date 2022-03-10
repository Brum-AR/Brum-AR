import { Injectable } from '@nestjs/common';
import { CreateTopCaseDto } from './dto/create-top_case.dto';
import { UpdateTopCaseDto } from './dto/update-top_case.dto';
import { InjectModel } from "@nestjs/mongoose";
import { TopCase, TopCaseDocument, TopCaseSchema } from "./schemas/top_case.schemas";
import { User, UserDocument } from "../user/schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class TopCaseService {

  constructor(@InjectModel(TopCase.name) private readonly model: Model<TopCaseDocument>) {}

  async create(createTopCaseDto: CreateTopCaseDto) : Promise<TopCase> {
    const TopCase = await this.model.create(createTopCaseDto);
    TopCase.create_at = new Date(Date.now());
    return TopCase.save();
  }

  async findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

}
