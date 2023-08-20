import { PickType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatBreedAndNameDto extends PickType(CreateCatDto, [
  'breed',
  'name',
] as const) {}
