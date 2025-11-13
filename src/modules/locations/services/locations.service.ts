import { Location } from '@entities/index';
import { LocationsQueryBuilderService } from '@modules/locations/services/locations-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
  constructor(private readonly _genresQB: LocationsQueryBuilderService) {}

  async getList(): Promise<Location[]> {
    return await this._genresQB.get();
  }

  async getById(id: string): Promise<Location> {
    const items = await this._genresQB.get(id);
    if (!items.length) {
      throw new HttpException(
        `Location with ID ${id} doesn't exist.`,
        HttpStatus.NOT_FOUND
      );
    }
    return items[0];
  }

  async create(location: Location): Promise<Location> {
    const result = await this._genresQB.create(location);
    if (!result)
      throw new HttpException(
        `There was an error creating the genre`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(result.identifiers[0]!.id);
  }

  async update(id: string, genre: Location): Promise<Location> {
    const storagedLocation = await this.getById(id);
    genre = { ...storagedLocation, ...genre };
    const result = await this._genresQB.update(id, genre);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating the Location`,
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
