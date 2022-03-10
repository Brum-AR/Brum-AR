"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScooterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const scooter_schema_1 = require("./schemas/scooter.schema");
let ScooterService = class ScooterService {
    constructor(scooterModel) {
        this.scooterModel = scooterModel;
    }
    async create(createScooterDto) {
        const createdScooter = new this.scooterModel({
            name: "scooter",
            price: 3200,
            max_speed: "45 Km/h",
            cylinder: "50 cc",
            license: "permis AM, BSR ou permis B",
            reverse_gear: true,
            control_screen: "écran LCD",
            anti_theft_security: "batteries amovibles, guidon verrouillable, alarme",
            crutch: "centrale et latérale",
            engine_type: "Bosch Brushless",
            engine_position: "moyeu de roue arrière",
            engine_power: "3000 Watts",
            battery_type: "lithium",
            battery_brand: "Samsung",
            battery_power: " 60 Volts",
            battery_life: "20/40 Ah",
            battery_max_autonomy_ECO: "45/90 km",
            battery_charging_time: " 4 heures 30",
            battery_removable: true,
            battery_weight: 10,
            framework_dimension: "1870 mm (longueur), 1140 mm (hauteur), 700 mm (largeur)",
            saddle_height: "740 mm",
            scooter_weight_without_battery: 76,
            max_weight: 155,
            front_suspension_type: "télescopique",
            back_suspension_type: "deux combinés amortisseurs et bras oscillant",
            assembly: "znen",
            braking_energy_recovery: true,
            brakes: "à disque hydraulique",
            brakes_size: "190 mm",
            stirrups_type: "double pistons juxtaposés",
            tire_type: "route",
            tire_size: "110-70-12",
            alarm_and_geotracking: "en option",
            top_case: "en option",
            windshield: "en option",
            portable_key: "en option",
            usb_port: "inclus",
            eco_mode: "inclus",
            created_at: new Date()
        });
        return createdScooter.save();
    }
    async findAll() {
        return this.scooterModel.find().exec();
    }
    async findAllDetails() {
        return this.scooterModel.find().select('_id name price').exec();
    }
    findOne(id) {
        return `This action returns a #${id} scooter`;
    }
    update(id, updateScooterDto) {
        return `This action updates a #${id} scooter`;
    }
    remove(id) {
        return this.scooterModel.findByIdAndRemove(id);
    }
};
ScooterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(scooter_schema_1.Scooter.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ScooterService);
exports.ScooterService = ScooterService;
//# sourceMappingURL=scooter.service.js.map