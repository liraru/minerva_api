import { Location } from '@entities/index';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class LocationsQueryBuilderService {
  constructor(
    @InjectRepository(Location) private readonly _locationsRepo: Repository<Location>
  ) {}

  get(id?: string): Promise<Location[]> {
    if (id) return this._locationsRepo.find({ where: { id: id } });
    return this._locationsRepo.find({ order: { address: 'ASC' } });
  }

  create(location: Location): Promise<InsertResult> {
    return this._locationsRepo.insert(location);
  }

  update(id: string, location: Location): Promise<UpdateResult> {
    return this._locationsRepo.update(id, location);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._locationsRepo.delete(id);
  }
}
