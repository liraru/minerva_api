import { GenresQueryBuilderService } from '@services/genres/genres-query-builder/genres-query-builder.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
  constructor(private readonly _genresQB: GenresQueryBuilderService) {}

  getList() {
    return this._genresQB.getList();
  }
}
