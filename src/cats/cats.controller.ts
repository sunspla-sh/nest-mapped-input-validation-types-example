import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { CatsService, Cat } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findCats(): Cat[] {
    return this.catsService.findCats();
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Put()
  updateCat(@Body() updateCatDto: UpdateCatDto): Cat {
    return this.catsService.updateCat(updateCatDto);
  }
}
