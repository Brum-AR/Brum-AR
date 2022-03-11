import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserDocument } from "./schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create() {
    const user = new this.userModel({
      "email": "root@myges.fr",
      "password": "root",
      "first_name": "brum-ar",
      "last_name": "brum-ar-api",
      "address": "242 rue du Faubourg Saint Antoine"
    })
    //return user.save();
    return {
      "statusCode": 403,
      "message": "You don't have the right to access this endpoint.",
      "error": "Forbidden"
    };
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }
}
