import { Manga } from '@entities/manga.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MangaQueryBuilderService {
  constructor(@InjectRepository(Manga) private readonly _mangaRepo: Repository<Manga>) {}

  getAll(
    page: number = 1,
    limit: number = 20,
    filters: { genreId?: string; language?: string; authorId?: string } = {}
  ): Promise<Manga[]> {
    const query = this._mangaRepo
      .createQueryBuilder('manga')
      .leftJoinAndSelect('manga.authors', 'author')
      .leftJoinAndSelect('manga.editorial', 'editorial')
      .leftJoinAndSelect('manga.genre', 'genre')
      .leftJoinAndSelect('manga.location', 'location');

    if (filters.genreId)
      query.andWhere('genre.id = :genreId', { genreId: filters.genreId });
    if (filters.language)
      query.andWhere('manga.language = :language', { language: filters.language });
    if (filters.authorId)
      query.andWhere('author.id = :authorId', { authorId: filters.authorId });

    return query
      .orderBy('manga.title', 'ASC')
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();
  }

  get(id?: string): Promise<Manga[]> {
    const query = this._mangaRepo
      .createQueryBuilder('manga')
      .leftJoinAndSelect('manga.authors', 'author')
      .leftJoinAndSelect('manga.editorial', 'editorial')
      .leftJoinAndSelect('manga.genre', 'genre')
      .leftJoinAndSelect('manga.location', 'location');

    if (id) query.where('manga.id = :id', { id });
    else query.orderBy('manga.title', 'ASC');

    return query.getMany();
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
