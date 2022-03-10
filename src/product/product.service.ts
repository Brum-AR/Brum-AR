import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entities/product.entity";

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private readonly model: Model<ProductDocument>) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.model.create(createProductDto);
    product.create_at = new Date();
    return product.save();
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }
}
