import { PartialType } from '@nestjs/mapped-types';
import { CreateBrakeDto } from './create-brake.dto';

export class UpdateBrakeDto extends PartialType(CreateBrakeDto) {}
