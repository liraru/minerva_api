import { Editorial } from '@entities/editorial.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class EditorialsQueryBuilderService {
  constructor(
    @InjectRepository(Editorial) private readonly _editorialRepo: Repository<Editorial>
  ) {}

  get(id?: string): Promise<Editorial[]> {
    if (id) return this._editorialRepo.find({ where: { id } });
    return this._editorialRepo.find({ order: { name: 'ASC' } });
  }

  create(name: string): Promise<InsertResult> {
    return this._editorialRepo.insert(new Editorial(name));
  }

  update(id: string, editorial: Editorial): Promise<UpdateResult> {
    return this._editorialRepo.update(id, editorial);
  }

  delete(id: string): Promise<DeleteResult> {
    return this._editorialRepo.delete(id);
  }
}
