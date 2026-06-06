import { Manga } from '@entities/manga.entity';
import { MangaQueryBuilderService } from '@modules/manga/services/manga/manga-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Injectable()
export class MangaService {
  constructor(private readonly _mangaQB: MangaQueryBuilderService) {}

  async getList(): Promise<Manga[]> {
    return await this._mangaQB.get();
  }

  async getById(id: string): Promise<Manga> {
    const items = await this._mangaQB.get(id);
    if (!items.length)
      throw new HttpException(`Manga with ID ${id} doesn't exist.`, HttpStatus.NOT_FOUND);
    return items[0];
  }

  async search(search: string): Promise<Manga[]> {
    return await this._mangaQB.search(`%${search}%`);
  }

  async create(manga: Manga): Promise<Manga> {
    const result = await this._mangaQB.create(manga);
    if (!result)
      throw new HttpException(
        `There was an error creating the manga`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0].id);
  }

  async update(id: string, manga: Partial<Manga>): Promise<Manga> {
    const stored = await this.getById(id);
    const updated = { ...stored, ...manga };
    const result = await this._mangaQB.update(id, updated);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the manga with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this._mangaQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deleting the manga with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }
}
