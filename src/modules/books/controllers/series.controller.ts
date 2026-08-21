// src/modules/books/controllers/series.controller.ts
import { Serie } from '@entities/serie.entity';
import { BooksService } from '@modules/books/services/books.service';
import { SeriesService } from '@modules/books/services/series.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('series')
export class SeriesController {
  constructor(
    private readonly _seriesService: SeriesService,
    private readonly _booksService: BooksService
  ) {}

  @Get()
  public getList() {
    return this._seriesService.getList();
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._seriesService.getById(id);
  }

  @Get('/:id/books')
  public getBooks(@Param('id') id: string) {
    return this._booksService.getBySerieId(id);
  }

  @Get('/search/:search')
  public search(@Param('search') search: string) {
    return this._seriesService.search(search);
  }

  @Post()
  public create(@Body() serie: Serie) {
    return this._seriesService.create(serie);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() serie: Partial<Serie>) {
    return this._seriesService.update(id, serie);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._seriesService.delete(id);
  }
}
