import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { UpdateCatAgeDto } from './dtos/update-cat-age.dto';
import { UpdateCatBreedAndNameDto } from './dtos/update-cat-breed-and-name.dto';
import { UpdateCatExceptAgeDto } from './dtos/update-cat-except-age.dto';
import { ExtraCatInfoDto } from './dtos/extra-cat-info.dto';
import { CreateCatWithExtraInfoDto } from './dtos/create-cat-with-extra-info.dto';

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  private idIncrement = 1;

  findCats() {
    return this.cats;
  }

  createCat(createCatDto: CreateCatDto) {
    this.cats.push({
      id: this.idIncrement,
      ...createCatDto,
    });
    this.idIncrement++;
    return this.cats[this.cats.length - 1];
  }

  extraInfo(extraCatInfoDto: ExtraCatInfoDto) {
    return extraCatInfoDto;
  }

  createCatWithExtraInfo(createCatWithExtraInfoDto: CreateCatWithExtraInfoDto) {
    return createCatWithExtraInfoDto;
  }

  updateCat(id: number, updateCatDto: UpdateCatDto) {
    const foundCatIndex = this.cats.findIndex((cat) => cat.id === id);
    if (foundCatIndex === -1) {
      throw new BadRequestException('Cat not found');
    }
    this.cats[foundCatIndex] = {
      ...this.cats[foundCatIndex],
      ...updateCatDto,
    };
    return this.cats[foundCatIndex];
  }

  updateCatAge(id: number, updateCatAgeDto: UpdateCatAgeDto) {
    const foundCatIndex = this.cats.findIndex((cat) => cat.id === id);
    if (foundCatIndex === -1) {
      throw new BadRequestException('Cat not found');
    }
    this.cats[foundCatIndex] = {
      ...this.cats[foundCatIndex],
      ...updateCatAgeDto,
    };
    return this.cats[foundCatIndex];
  }

  updateCatBreedAndName(
    id: number,
    updateCatBreedAndNameDto: UpdateCatBreedAndNameDto,
  ) {
    const foundCatIndex = this.cats.findIndex((cat) => cat.id === id);
    if (foundCatIndex === -1) {
      throw new BadRequestException('Cat not found');
    }
    this.cats[foundCatIndex] = {
      ...this.cats[foundCatIndex],
      ...updateCatBreedAndNameDto,
    };
    return this.cats[foundCatIndex];
  }

  updateCatExceptAge(id: number, updateCatExceptAgeDto: UpdateCatExceptAgeDto) {
    const foundCatIndex = this.cats.findIndex((cat) => cat.id === id);
    if (foundCatIndex === -1) {
      throw new BadRequestException('Cat not found');
    }
    this.cats[foundCatIndex] = {
      ...this.cats[foundCatIndex],
      ...updateCatExceptAgeDto,
    };
    return this.cats[foundCatIndex];
  }
}
