import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from "./schemas/user.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.model.create(createUserDto);
    user.create_at = new Date(Date.now());
    return user.save();
  }

  async findAll() {
    return this.model.find().exec();
  }

  async findOne(id: string) {
    return this.model.findById(id);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
