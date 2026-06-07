import { MangaChapter } from '@entities/manga-chapter.entity';
import { MangaChaptersService } from '@modules/manga/services/manga-chapters/manga-chapters.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('manga-chapters')
export class MangaChaptersController {
  constructor(private readonly _mangaChaptersService: MangaChaptersService) {}

  @Get()
  public getList() {
    return this._mangaChaptersService.getList();
  }

  @Get('/manga/:mangaId')
  public getByMangaId(@Param('mangaId') mangaId: string) {
    return this._mangaChaptersService.getByMangaId(mangaId);
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._mangaChaptersService.getById(id);
  }

  @Post()
  public create(@Body() chapter: MangaChapter) {
    return this._mangaChaptersService.create(chapter);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() chapter: Partial<MangaChapter>) {
    return this._mangaChaptersService.update(id, chapter);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._mangaChaptersService.delete(id);
  }
}