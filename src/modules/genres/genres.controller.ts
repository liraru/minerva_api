import { Controller, Get } from '@nestjs/common';
import { GenresService } from '@services/genres/genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly _genresService: GenresService) {}

  @Get(``)
  public getList() {
    return this._genresService.getList();
  }
}
