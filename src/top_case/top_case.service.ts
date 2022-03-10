import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { TopCase, TopCaseDocument, TopCaseSchema } from "./schemas/top_case.schema";
import { User, UserDocument } from "../user/schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class TopCaseService {

  constructor(@InjectModel(TopCase.name) private readonly model: Model<TopCaseDocument>) {}

  async create() : Promise<TopCase> {
    //TODO
    return;
  }

  async findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

}
