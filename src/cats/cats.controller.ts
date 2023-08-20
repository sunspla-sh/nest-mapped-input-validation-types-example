import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService, Cat } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { UpdateCatDto } from './dtos/update-cat.dto';
import { UpdateCatAgeDto } from './dtos/update-cat-age.dto';
import { UpdateCatBreedAndNameDto } from './dtos/update-cat-breed-and-name.dto';
import { UpdateCatExceptAgeDto } from './dtos/update-cat-except-age.dto';
import { ExtraCatInfoDto } from './dtos/extra-cat-info.dto';
import { CreateCatWithExtraInfoDto } from './dtos/create-cat-with-extra-info.dto';

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

  @Post('extra')
  extraInfo(@Body() extraCatInfoDto: ExtraCatInfoDto) {
    return this.catsService.extraInfo(extraCatInfoDto);
  }

  @Post('cat-with-extra')
  createCatWithExtraInfo(
    @Body() createCatWithExtraInfo: CreateCatWithExtraInfoDto,
  ) {
    return this.catsService.createCatWithExtraInfo(createCatWithExtraInfo);
  }

  @Put(':id')
  updateCat(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatDto: UpdateCatDto,
  ): Cat {
    return this.catsService.updateCat(id, updateCatDto);
  }

  @Put(':id/age')
  updateCatAge(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatAgeDto: UpdateCatAgeDto,
  ) {
    return this.catsService.updateCatAge(id, updateCatAgeDto);
  }

  @Put(':id/breed-and-name')
  updateCatBreedAndName(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatBreedAndNameDto: UpdateCatBreedAndNameDto,
  ) {
    return this.catsService.updateCatBreedAndName(id, updateCatBreedAndNameDto);
  }

  @Put(':id/except-age')
  updateCatExceptAge(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatExceptAgeDto: UpdateCatExceptAgeDto,
  ) {
    return this.catsService.updateCatExceptAge(id, updateCatExceptAgeDto);
  }
}
