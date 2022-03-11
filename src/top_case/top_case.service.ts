import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { TopCase, TopCaseDocument, TopCaseSchema } from "./schemas/top_case.schema";
import { User, UserDocument } from "../user/schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class TopCaseService {

  constructor(@InjectModel(TopCase.name) private readonly topCaseModel: Model<TopCaseDocument>) {}

  async create() {
    const createdTopCase = new this.topCaseModel({
      description: "Un Top Case pour le scooter.",
      price: 64.90,
      created_at: new Date()
    })
    return {
      "statusCode": 403,
      "message": "You don't have the right to access this endpoint.",
      "error": "Forbidden"
    };
  }

  async findAll() {
    return this.topCaseModel.find().exec();
  }

  findOne(id: string) {
    return this.topCaseModel.findById(id);
  }

}
