import { BooksQueryBuilderService } from '@modules/books/services/books-query-builder.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(private readonly _booksQB: BooksQueryBuilderService) {}

  async getList(orderColumn: string = 'title', order: 'ASC' | 'DESC' = 'ASC') {
    return await this._booksQB.getAll(orderColumn, order);
  }

  async getById(id: string) {
    
  }
}
