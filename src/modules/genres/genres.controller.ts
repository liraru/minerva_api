import { Genre } from '@entities/index';
import { GenresService } from '@modules/genres';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('genres')
export class GenresController {
  constructor(private readonly _genresService: GenresService) {}

  @Get(``)
  public getList() {
    return this._genresService.getList();
  }

  @Get(`/:id`)
  public getById(@Param(`id`) id: string) {
    return this._genresService.getById(id);
  }

  @Post(``)
  public create(@Body() genre: Genre) {
    return this._genresService.create(genre);
  }

  @Put(`/:id`)
  public update(@Param(`id`) id: string, @Body() genre: Genre) {
    return this._genresService.update(id, genre);
  }

  @Delete(`/:id`)
  public delete(@Param(`id`) id: string) {
    return this._genresService.delete(id);
  }
}
