import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenresService } from '@services/index';
import { Genre } from '@entities/index';

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
  public create(@Body() genre: Partial<Genre>) {
    return this._genresService.create(genre.name);
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
