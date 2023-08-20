import { IntersectionType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { ExtraCatInfoDto } from './extra-cat-info.dto';

export class CreateCatWithExtraInfoDto extends IntersectionType(
  CreateCatDto,
  ExtraCatInfoDto,
) {}
