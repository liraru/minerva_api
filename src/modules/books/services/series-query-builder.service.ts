import { Serie } from '@entities/serie.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SeriesQueryBuilderService {
  constructor(@InjectRepository(Serie) private readonly _seriesRepo: Repository<Serie>) {}

  get(id?: string): Promise<Serie[]> {
    if (id)
      return this._seriesRepo.find({
        relations: ['authors', 'books'],
        where: { id }
      });
    return this._seriesRepo.find({
      relations: ['authors', 'books'],
      order: { name: 'ASC' }
    });
  }

  search(search: string): Promise<Serie[]> {
    return this._seriesRepo
      .createQueryBuilder('serie')
      .leftJoinAndSelect('serie.authors', 'author')
      .leftJoinAndSelect('serie.books', 'book')
      .where('serie.name LIKE :search', { search })
      .orWhere('author.name LIKE :search', { search })
      .orWhere('author.lastname LIKE :search', { search })
      .getMany();
  }

  create(serie: Serie): Promise<InsertResult> {
    return this._seriesRepo.insert(serie);
  }

  update(id: string, serie: Serie): Promise<UpdateResult> {
    return this._seriesRepo.update(id, serie);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._seriesRepo.delete(id);
  }
}
