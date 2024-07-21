import { Genre } from '@entities/genre.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class GenresQueryBuilderService {
  constructor(private readonly _genresRepo: Repository<Genre>) {}

  async getList() {
    return await this._genresRepo.find({ order: { name: 'ASC' } });
  }
}
