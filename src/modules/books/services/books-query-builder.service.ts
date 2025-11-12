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

@Injectable()
export class BooksQueryBuilderService {
  constructor(@InjectRepository(Book) private readonly _booksRepo: Repository<Book>) {}

  getAll(orderColumn: string, order: 'ASC' | 'DESC'): Promise<Book[]> {
    return this._booksRepo.find({
      where: { active: true },
      order: { [orderColumn]: order }
    });
  }

  getById(id: string): Promise<Book> {
    return this._booksRepo.findOne({
      relations: ['authors', 'editorial', 'genre'],
      where: { id: id }
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
