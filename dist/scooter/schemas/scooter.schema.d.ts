/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export declare type ScooterDocument = Scooter & Document;
export declare class Scooter {
    name: string;
    price: number;
    max_speed: string;
    cylinder: string;
    license: string;
    reverse_gear: boolean;
    anti_theft_security: string;
    crutch: string;
    engine_type: string;
    engine_position: string;
    engine_power: string;
    battery_type: string;
    battery_brand: string;
    battery_power: string;
    battery_life: string;
    battery_max_autonomy: string;
    battery_charging_time: string;
    battery_removable: boolean;
    battery_weight: number;
    framework_dimension: string;
    saddle_height: string;
    scooter_weight_without_battery: number;
    max_weight: number;
    front_suspension_type: string;
    back_suspension_type: string;
    assembly: string;
    braking_energy_recovery: string;
    brakes: string;
    brakes_size: string;
    stirrups_type: string;
    tire_type: string;
    tire_size: string;
    alarm_and_geotracking: string;
    top_case: string;
    windshield: string;
    portable_key: string;
    usb_port: string;
    eco_mode: string;
    created_at: Date;
}
export declare const ScooterSchema: import("mongoose").Schema<import("mongoose").Document<Scooter, any, any>, import("mongoose").Model<import("mongoose").Document<Scooter, any, any>, any, any, any>, any, any>;
