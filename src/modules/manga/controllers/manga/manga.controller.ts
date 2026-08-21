import { Manga } from '@entities/manga.entity';
import { MangaChaptersService } from '@modules/manga/services/manga-chapters/manga-chapters.service';
import { MangaService } from '@modules/manga/services/manga/manga.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('manga')
export class MangaController {
  constructor(
    private readonly _mangaService: MangaService,
    private readonly _mangaChaptersService: MangaChaptersService
  ) {}

  @Get()
  public getList(
    @Query('genreId') genreId?: string,
    @Query('language') language?: string,
    @Query('authorId') authorId?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 20
  ) {
    return this._mangaService.getList(page, limit, { genreId, language, authorId });
  }

  @Get('/search/:search')
  public search(@Param('search') search: string) {
    return this._mangaService.search(search);
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._mangaService.getById(id);
  }

  @Get('/:id/chapters')
  public getChapters(@Param('id') id: string) {
    return this._mangaChaptersService.getByMangaId(id);
  }

  @Post()
  public create(@Body() manga: Manga) {
    return this._mangaService.create(manga);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() manga: Partial<Manga>) {
    return this._mangaService.update(id, manga);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._mangaService.delete(id);
  }
}
