import { Book } from '@entities/book.entity';
import { BooksService } from '@modules/books/services/books.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private readonly _booksService: BooksService) {}

  @Get(``)
  public getList() {
    return this._booksService.getList();
  }

  @Get(`/:id`)
  public getById(@Param(`id`) id: string) {
    return this._booksService.getById(id);
  }

  @Get(`/search/:search`)
  public search(@Param(`search`) search: string) {
    return this._booksService.search(search);
  }

  @Post(``)
  public create(@Body() book: Book) {
    return this._booksService.create(book);
  }

  @Put(`/:id`)
  public update(@Param(`id`) id: string, @Body() book: Book) {
    return this._booksService.update(id, book);
  }

  @Patch(`/:id/activate`)
  public activate(@Param(`id`) id: string) {
    return this._booksService.changeActive(id, true);
  }

  @Patch(`/:id/deactivate`)
  public deactivate(@Param(`id`) id: string) {
    return this._booksService.changeActive(id, false);
  }

  @Delete(`/:id`)
  public delete(@Param(`id`) id: string) {
    return this._booksService.delete(id);
  }
}
