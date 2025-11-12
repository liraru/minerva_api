import { Genre } from '@entities/genre.entity';
import { GenresQueryBuilderService } from '@services/genres/genres-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GenresService {
  constructor(private readonly _genresQB: GenresQueryBuilderService) {}

  async getList(): Promise<Genre[]> {
    return await this._genresQB.get();
  }

  async getById(id: string): Promise<Genre> {
    const items = await this._genresQB.get(id);
    if (!items.length) {
      throw new HttpException(`Genre with ID ${id} doesn't exist.`, HttpStatus.NOT_FOUND);
    }
    return items[0];
  }

  async create(name: string): Promise<Genre> {
    const result = await this._genresQB.create(name);
    if (!result)
      throw new HttpException(
        `There was an error creating the genre`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0]!.id);
  }

  async update(id: string, genre: Genre): Promise<Genre> {
    const storagedGenre = await this.getById(id);
    genre = { ...storagedGenre, ...genre };
    const result = await this._genresQB.update(id, genre);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the Genre`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this._genresQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deleting the genre`,
        HttpStatus.EXPECTATION_FAILED
      );
    return null;
  }
}
