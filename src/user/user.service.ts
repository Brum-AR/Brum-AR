import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findByLogin(email: string, password: string) {
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = user.password === password;

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }
}
