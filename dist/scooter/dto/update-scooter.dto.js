"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScooterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_scooter_dto_1 = require("./create-scooter.dto");
class UpdateScooterDto extends (0, mapped_types_1.PartialType)(create_scooter_dto_1.CreateScooterDto) {
}
exports.UpdateScooterDto = UpdateScooterDto;
//# sourceMappingURL=update-scooter.dto.js.map