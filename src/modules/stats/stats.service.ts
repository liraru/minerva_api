import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import { Author } from '@entities/author.entity';
import { Serie } from '@entities/serie.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Book) private readonly _booksRepo: Repository<Book>,
    @InjectRepository(Manga) private readonly _mangaRepo: Repository<Manga>,
    @InjectRepository(Author) private readonly _authorsRepo: Repository<Author>,
    @InjectRepository(Serie) private readonly _seriesRepo: Repository<Serie>
  ) {}

  async getStats() {
    const [books, mangas, authors, series] = await Promise.all([
      this._booksRepo.count({ where: { active: true } }),
      this._mangaRepo.count(),
      this._authorsRepo.count({ where: { active: true } }),
      this._seriesRepo.count()
    ]);

    return { books, mangas, authors, series };
  }
}
