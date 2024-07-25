import { Author } from '@entities/author.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AuthorsQueryBuilderService {
  constructor(
    @InjectRepository(Author) private readonly _authorsRepo: Repository<Author>
  ) {}

  get(): Promise<Author[]> {
    return this._authorsRepo.find({ order: { lastname: 'ASC', name: 'ASC' } });
  }

  public getById(id: string): Promise<Author> {
    return this._authorsRepo.findOne({
      relations: { books: true }, // ! funciona
      // relations: { books: true, series: true, mangas: true },
      // relations: ['books'], // ! funciona
      // relations: ['books', 'series', 'mangas'],
      where: { id: id }
    });
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
