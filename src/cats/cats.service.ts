import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

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

  updateCat(updateCatDto: UpdateCatDto) {
    const foundCatIndex = this.cats.findIndex(
      (cat) => cat.id === updateCatDto.id,
    );
    if (foundCatIndex === -1) {
      throw new BadRequestException('Cat not found');
    }
    this.cats[foundCatIndex] = {
      ...this.cats[foundCatIndex],
      ...updateCatDto,
    };
    return this.cats[foundCatIndex];
  }

  updateCatAge(updateCatAgeDto) {
    return;
  }

  updateCatBreedAndName(updateCatBreedAndNameDto) {
    return;
  }

  updateCatExceptAge() {
    return;
  }
}
