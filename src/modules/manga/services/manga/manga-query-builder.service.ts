import { Manga } from '@entities/manga.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MangaQueryBuilderService {
  constructor(@InjectRepository(Manga) private readonly _mangaRepo: Repository<Manga>) {}

  get(id?: string): Promise<Manga[]> {
    if (id)
      return this._mangaRepo.find({
        relations: ['authors', 'editorial', 'genre', 'location'],
        where: { id }
      });
    return this._mangaRepo.find({
      relations: ['authors', 'editorial', 'genre', 'location'],
      order: { title: 'ASC' }
    });
  }

  search(search: string): Promise<Manga[]> {
    return this._mangaRepo.find({
      relations: { authors: true },
      where: [
        { title: ILike(search) },
        { authors: [{ name: ILike(search) }, { lastname: ILike(search) }] }
      ]
    });
  }

  create(manga: Manga): Promise<InsertResult> {
    return this._mangaRepo.insert(manga);
  }

  update(id: string, manga: Manga): Promise<UpdateResult> {
    return this._mangaRepo.update(id, manga);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._mangaRepo.delete(id);
  }
}
