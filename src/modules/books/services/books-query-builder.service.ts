import { Book } from '@entities/book.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DataSource,
  DeleteResult,
  ILike,
  InsertEvent,
  InsertResult,
  Repository,
  UpdateResult
} from 'typeorm';
import { SORT_DIRECTION } from '../../../constants/shared.constant';

@Injectable()
export class BooksQueryBuilderService {
  constructor(@InjectRepository(Book) private readonly _booksRepo: Repository<Book>) {}

  getAll(
    orderColumn: string,
    order: 'ASC' | 'DESC',
    page: number = 1,
    limit: number = 20,
    filters: { genreId?: string; language?: string; authorId?: string } = {}
  ): Promise<Book[]> {
    const query = this._booksRepo
      .createQueryBuilder('book')
      .leftJoinAndSelect('book.authors', 'author')
      .leftJoinAndSelect('book.editorial', 'editorial')
      .leftJoinAndSelect('book.genre', 'genre')
      .leftJoinAndSelect('book.serie', 'serie')
      .leftJoinAndSelect('book.location', 'location')
      .where('book.active = :active', { active: true });

    if (filters.genreId)
      query.andWhere('genre.id = :genreId', { genreId: filters.genreId });
    if (filters.language)
      query.andWhere('book.language = :language', { language: filters.language });
    if (filters.authorId)
      query.andWhere('author.id = :authorId', { authorId: filters.authorId });

    return query
      .orderBy(`book.${orderColumn}`, order)
      .skip((page - 1) * limit)
      .take(limit)
      .getMany();
  }

  getById(id: string): Promise<Book> {
    return this._booksRepo.findOne({
      relations: ['authors', 'editorial', 'genre'],
      where: { id: id }
    });
  }

  getBySerieId(serieId: string): Promise<Book[]> {
    return this._booksRepo
      .createQueryBuilder('book')
      .leftJoinAndSelect('book.authors', 'author')
      .leftJoinAndSelect('book.editorial', 'editorial')
      .leftJoinAndSelect('book.genre', 'genre')
      .leftJoinAndSelect('book.serie', 'serie')
      .leftJoinAndSelect('book.location', 'location')
      .where('serie.id = :serieId', { serieId })
      .andWhere('book.active = :active', { active: true })
      .getMany();
  }

  search(search: string): Promise<Book[]> {
    return this._booksRepo.find({
      relations: { authors: true },
      select: { authors: { name: true, lastname: true, countryId: true } },
      where: {
        title: ILike(search),
        authors: [{ name: ILike(search) }, { lastname: ILike(search) }]
      }
    });
  }

  create(book: Book): Promise<InsertResult> {
    return this._booksRepo.insert(book);
  }

  update(id: string, book: Book): Promise<UpdateResult> {
    return this._booksRepo.update(id, book);
  }

  changeActive(id: string, isActive: boolean): Promise<UpdateResult> {
    return this._booksRepo.update(id, { active: isActive });
  }

  delete(id: string): Promise<DeleteResult> {
    return this._booksRepo.delete(id);
  }
}
