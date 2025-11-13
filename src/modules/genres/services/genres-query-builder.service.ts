import { Genre } from '@entities/genre.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GenresQueryBuilderService {
  constructor(@InjectRepository(Genre) private readonly _genresRepo: Repository<Genre>) {}

  get(id?: string): Promise<Genre[]> {
    if (id) return this._genresRepo.find({ where: { id: id } });
    return this._genresRepo.find({ order: { name: 'ASC' } });
  }

  create(genre: Genre): Promise<InsertResult> {
    return this._genresRepo.insert(genre);
  }

  update(id: string, genre: Genre): Promise<UpdateResult> {
    return this._genresRepo.update(id, genre);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._genresRepo.delete(id);
  }
}
