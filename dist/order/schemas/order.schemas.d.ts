/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type OrderDocument = Order & Document;
export declare class Order {
    user_id: string;
    products_id: string[];
    create_at: Date;
}
export declare const OrderSchema: import("mongoose").Schema<Document<Order, any, any>, import("mongoose").Model<Document<Order, any, any>, any, any, any>, any, any>;
