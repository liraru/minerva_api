import { Author } from '@entities/author.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AuthorsQueryBuilderService {
  constructor(
    @InjectRepository(Author) private readonly _authorsRepo: Repository<Author>
  ) {}

  get(id?: string): Promise<Author[]> {
    if (id) return this._authorsRepo.find({ where: { id: id } });
    return this._authorsRepo.find({ order: { lastname: 'ASC', name: 'ASC' } });
  }

  getByName(search: string) {
    return this._authorsRepo.find({
      where: [{ name: ILike(search) }, { lastname: ILike(search) }]
    });
  }

  create(author: Author): Promise<InsertResult> {
    return this._authorsRepo.insert(author);
  }

  update(id: string, genre: Author): Promise<UpdateResult> {
    return this._authorsRepo.update(id, genre);
  }

  logicalDelete(id: string, isDeleted: boolean): Promise<UpdateResult> {
    return this._authorsRepo.update(id, { active: isDeleted });
  }

  delete(id: string): Promise<DeleteResult> {
    return this._authorsRepo.delete(id);
  }
}
