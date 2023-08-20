import { PickType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatAgeDto extends PickType(CreateCatDto, ['age'] as const) {}
