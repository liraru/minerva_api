import { Serie } from '@entities/serie.entity';
import { SeriesQueryBuilderService } from '@modules/books/services/series-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(private readonly _seriesQB: SeriesQueryBuilderService) {}

  async getList(): Promise<Serie[]> {
    return await this._seriesQB.get();
  }

  async getById(id: string): Promise<Serie> {
    const items = await this._seriesQB.get(id);
    if (!items.length)
      throw new HttpException(`Serie with ID ${id} doesn't exist.`, HttpStatus.NOT_FOUND);
    return items[0];
  }

  async search(search: string): Promise<Serie[]> {
    return await this._seriesQB.search(`%${search}%`);
  }

  async create(serie: Serie): Promise<Serie> {
    const result = await this._seriesQB.create(serie);
    if (!result)
      throw new HttpException(
        `There was an error creating the serie`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0].id);
  }

  async update(id: string, serie: Partial<Serie>): Promise<Serie> {
    const stored = await this.getById(id);
    const updated = { ...stored, ...serie };
    const result = await this._seriesQB.update(id, updated);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the serie with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this._seriesQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deleting the serie with id ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }
}
