import { Book } from '@entities/book.entity';
import { BooksQueryBuilderService } from '@services/books/books-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(private readonly _booksQB: BooksQueryBuilderService) {}

  async getList(
    orderColumn: string = 'title',
    order: 'ASC' | 'DESC' = 'ASC'
  ): Promise<Book[]> {
    return await this._booksQB.getAll(orderColumn, order);
  }

  async getById(id: string): Promise<Book> {
    return await this._booksQB.getById(id);
  }

  async search(search: string): Promise<Book[]> {
    return await this._booksQB.search(search);
  }

  async create(book: Book): Promise<Book> {
    const result = await this._booksQB.create(book);
    if (!result)
      throw new HttpException(
        `There was an error creating the book`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0].id);
  }

  async update(id: string, book: Partial<Book>): Promise<Book> {
    const storaged = await this.getById(id);
    if (!storaged)
      throw new HttpException(
        `There was an error retrieving the book with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    const updated = { ...storaged, ...book };
    const result = await this._booksQB.update(id, updated);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the book with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async changeActive(id: string, isActive: boolean): Promise<UpdateResult> {
    const result = await this._booksQB.changeActive(id, isActive);
    if (!result.affected)
      throw new HttpException(
        `There was an error ${isActive ? 'activating' : 'deactivating'} with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this._booksQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deteling the book with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }
}
