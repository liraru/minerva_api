// src/modules/stats/stats.service.ts
import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import { Author } from '@entities/author.entity';
import { Serie } from '@entities/serie.entity';
import { Genre } from '@entities/genre.entity';
import { Location } from '@entities/location.entity';
import { Editorial } from '@entities/editorial.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Book) private readonly _booksRepo: Repository<Book>,
    @InjectRepository(Manga) private readonly _mangaRepo: Repository<Manga>,
    @InjectRepository(Author) private readonly _authorsRepo: Repository<Author>,
    @InjectRepository(Serie) private readonly _seriesRepo: Repository<Serie>,
    @InjectRepository(Genre) private readonly _genresRepo: Repository<Genre>,
    @InjectRepository(Location) private readonly _locationsRepo: Repository<Location>,
    @InjectRepository(Editorial) private readonly _editorialsRepo: Repository<Editorial>
  ) {}

  async getStats() {
    const [books, mangas, authors, series, genres, locations, editorials] =
      await Promise.all([
        this._booksRepo.count({ where: { active: true } }),
        this._mangaRepo.count(),
        this._authorsRepo.count({ where: { active: true } }),
        this._seriesRepo.count(),
        this._genresRepo.count(),
        this._locationsRepo.count(),
        this._editorialsRepo.count()
      ]);

    return { books, mangas, authors, series, genres, locations, editorials };
  }
}
