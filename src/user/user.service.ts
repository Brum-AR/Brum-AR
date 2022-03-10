import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from "./entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {

    return 'This action adds a new user';
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
