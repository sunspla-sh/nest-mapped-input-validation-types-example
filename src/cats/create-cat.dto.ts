import { Length, IsInt, Min, Max } from 'class-validator';

export class CreateCatDto {
  @Length(0, 64)
  name: string;

  @IsInt()
  @Min(0)
  @Max(30)
  age: number;

  @Length(0, 64)
  breed: string;
}
