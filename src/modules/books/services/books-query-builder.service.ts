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
    order: SORT_DIRECTION,
    page: number = 1,
    limit: number = 20,
    filters: { genreId?: string; language?: string; authorId?: string } = {}
  ): Promise<Book[]> {
    const where: any = { active: true };
    if (filters.genreId) where.genre = { id: filters.genreId };
    if (filters.language) where.language = filters.language;
    if (filters.authorId) where.authors = { id: filters.authorId };

    return this._booksRepo.find({
      where,
      order: { [orderColumn]: order },
      skip: (page - 1) * limit,
      take: limit
    });
  }

  getById(id: string): Promise<Book> {
    return this._booksRepo.findOne({
      relations: ['authors', 'editorial', 'genre'],
      where: { id: id }
    });
  }

  getBySerieId(serieId: string): Promise<Book[]> {
    return this._booksRepo.find({
      relations: ['authors', 'editorial', 'genre', 'serie', 'location'],
      where: { serie: { id: serieId }, active: true }
    });
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
