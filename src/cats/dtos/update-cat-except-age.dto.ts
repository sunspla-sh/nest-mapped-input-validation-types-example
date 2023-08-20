import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatExceptAgeDto extends PartialType(
  OmitType(CreateCatDto, ['age'] as const),
) {}
