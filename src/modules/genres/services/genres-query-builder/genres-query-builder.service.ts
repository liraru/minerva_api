import { Genre } from '@entities/genre.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GenresQueryBuilderService {
  constructor(@InjectRepository(Genre) private readonly _genresRepo: Repository<Genre>) {}

  async getList() {
    return await this._genresRepo.find({ order: { name: 'ASC' } });
  }
}
