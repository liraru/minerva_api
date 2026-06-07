import { MangaChapter } from '@entities/manga-chapter.entity';
import { MangaChaptersQueryBuilderService } from '@modules/manga/services/manga-chapters/manga-chapters-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Injectable()
export class MangaChaptersService {
  constructor(private readonly _mangaChaptersQB: MangaChaptersQueryBuilderService) {}

  async getList(): Promise<MangaChapter[]> {
    return await this._mangaChaptersQB.get();
  }

  async getById(id: string): Promise<MangaChapter> {
    const items = await this._mangaChaptersQB.get(id);
    if (!items.length)
      throw new HttpException(
        `MangaChapter with ID ${id} doesn't exist.`,
        HttpStatus.NOT_FOUND
      );
    return items[0];
  }

  async getByMangaId(mangaId: string): Promise<MangaChapter[]> {
    return await this._mangaChaptersQB.getByMangaId(mangaId);
  }

  async create(chapter: MangaChapter): Promise<MangaChapter> {
    const result = await this._mangaChaptersQB.create(chapter);
    if (!result)
      throw new HttpException(
        `There was an error creating the chapter`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0].id);
  }

  async update(id: string, chapter: Partial<MangaChapter>): Promise<MangaChapter> {
    const stored = await this.getById(id);
    const updated = { ...stored, ...chapter };
    const result = await this._mangaChaptersQB.update(id, updated);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the chapter with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this._mangaChaptersQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deleting the chapter with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }
}