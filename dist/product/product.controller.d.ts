/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/product.entity").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], import("./entities/product.entity").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/product.entity").ProductDocument>;
    findOne(id: string): import("mongoose").Query<import("./entities/product.entity").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, import("./entities/product.entity").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("./entities/product.entity").ProductDocument>;
}
