"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScooterModule = void 0;
const common_1 = require("@nestjs/common");
const scooter_service_1 = require("./scooter.service");
const scooter_controller_1 = require("./scooter.controller");
const mongoose_1 = require("@nestjs/mongoose");
const scooter_schema_1 = require("./schemas/scooter.schema");
let ScooterModule = class ScooterModule {
};
ScooterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: scooter_schema_1.Scooter.name, schema: scooter_schema_1.ScooterSchema }]),
        ],
        controllers: [scooter_controller_1.ScooterController],
        providers: [scooter_service_1.ScooterService],
    })
], ScooterModule);
exports.ScooterModule = ScooterModule;
//# sourceMappingURL=scooter.module.js.map