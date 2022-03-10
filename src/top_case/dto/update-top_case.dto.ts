import { PartialType } from '@nestjs/mapped-types';
import { CreateTopCaseDto } from './create-top_case.dto';

export class UpdateTopCaseDto extends PartialType(CreateTopCaseDto) {}
