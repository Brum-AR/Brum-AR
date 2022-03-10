/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { CreateProductDto } from './dto/create-product.dto';
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entities/product.entity";
export declare class ProductService {
    private readonly model;
    constructor(model: Model<ProductDocument>);
    create(createProductDto: CreateProductDto): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, ProductDocument>;
    findOne(id: string): import("mongoose").Query<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, ProductDocument>;
}
