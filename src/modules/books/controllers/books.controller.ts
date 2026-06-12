import { Book } from '@entities/book.entity';
import { BooksService } from '@modules/books/services/books.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { SORT_DIRECTION } from '../../../constants/shared.constant';

@Controller('books')
export class BooksController {
  constructor(private readonly _booksService: BooksService) {}

  @Get('')
  public getList(
    @Query('genreId') genreId?: string,
    @Query('language') language?: string,
    @Query('authorId') authorId?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20,
    @Query('sortBy') sortBy: string = 'title',
    @Query('sortOrder') sortOrder: SORT_DIRECTION = SORT_DIRECTION.ASC
  ) {
    return this._booksService.getList(page, limit, sortBy, sortOrder, {
      genreId,
      language,
      authorId
    });
  }

  @Get('/search/:search')
  public search(@Param('search') search: string) {
    return this._booksService.search(search);
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._booksService.getById(id);
  }

  @Post('')
  public create(@Body() book: Book) {
    return this._booksService.create(book);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() book: Book) {
    return this._booksService.update(id, book);
  }

  @Patch('/:id/activate')
  public activate(@Param('id') id: string) {
    return this._booksService.changeActive(id, true);
  }

  @Patch('/:id/deactivate')
  public deactivate(@Param('id') id: string) {
    return this._booksService.changeActive(id, false);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._booksService.delete(id);
  }
}
