import { Location } from '@entities/index';
import { LocationsQueryBuilderService } from '@modules/locations/services/locations-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
  constructor(private readonly _locationsQB: LocationsQueryBuilderService) {}

  async getList(): Promise<Location[]> {
    return this._locationsQB.get();
  }

  async getById(id: string): Promise<Location> {
    const items = await this._locationsQB.get(id);
    if (!items.length) {
      throw new HttpException(
        `Location with ID ${id} doesn't exist.`,
        HttpStatus.NOT_FOUND
      );
    }
    return items[0];
  }

  async create(location: Location): Promise<Location> {
    const result = await this._locationsQB.create(location);
    if (!result) {
      throw new HttpException(
        `There was an error creating the location`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
    return this.getById(result.identifiers[0]!.id);
  }

  async update(id: string, location: Location): Promise<Location> {
    const stored = await this.getById(id);
    const merged = { ...stored, ...location };
    const result = await this._locationsQB.update(id, merged);
    if (!result.affected) {
      throw new HttpException(
        `There was an error updating the location`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
    return this.getById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this._locationsQB.delete(id);
    if (!result.affected) {
      throw new HttpException(
        `There was an error deleting the location`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
  }
}
