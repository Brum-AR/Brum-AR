import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../user/schemas/user.entity";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entities/product.entity";

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private readonly model: Model<ProductDocument>) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.model.create(createProductDto);
    return product.save();
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
