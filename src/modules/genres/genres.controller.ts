import { Genre } from '@entities/index';
import { GenresService } from '@modules/genres';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly _genresService: GenresService) {}

  @Get(``)
  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: 200, description: '', example: [{}] })
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
