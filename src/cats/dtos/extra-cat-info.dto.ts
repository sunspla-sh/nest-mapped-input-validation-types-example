import { IsBooleanString } from 'class-validator';

export class ExtraCatInfoDto {
  @IsBooleanString()
  tagged: boolean;
}
