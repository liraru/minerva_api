import { Author } from '@entities/author.entity';
import { AuthorsQueryBuilderService } from '@modules/authors/services/authors-query-builder/authors-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Http2ServerResponse } from 'http2';
import { DeleteResult, UpdateResult } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthorsService {
  constructor(private readonly _authorsQB: AuthorsQueryBuilderService) {}

  async getList(): Promise<Author[]> {
    return await this._authorsQB.get();
  }

  async getById(id: string): Promise<Author> {
    const result = await this._authorsQB.get(id);
    if (!result.length) {
      throw new HttpException(`Author with ID ${id} doesn't exist`, HttpStatus.NOT_FOUND);
    }
    return result[0];
  }

  async getByName(search: string): Promise<Author[]> {
    return await this._authorsQB.getByName(search);
  }

  async create(author: Author): Promise<Author> {
    const id = uuidv4();
    const result = await this._authorsQB.create({ id, ...author });
    if (!result)
      throw new HttpException(
        `There was an error creating the author`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async update(id: string, author: Author): Promise<Author> {
    const storaged = await this.getById(id);
    if (!storaged)
      throw new HttpException(`No author found with id ${id}`, HttpStatus.NOT_FOUND);
    const updated = { ...storaged, ...author };
    const result = await this._authorsQB.update(id, updated);
    if (!result.affected)
      throw new HttpException(
        `There was an error updating author ${id}`,
        HttpStatus.EXPECTATION_FAILED
      );
    return this.getById(id);
  }

  async changeActive(id: string, isActive: boolean): Promise<UpdateResult> {
    const result = await this._authorsQB.logicalDelete(id, isActive);
    if (!result.affected)
      throw new HttpException(
        `There was an error ${isActive ? 'enabling' : 'disabling'} the author`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }

  async delete(id: string): Promise<DeleteResult> {
    const result = await this._authorsQB.delete(id);
    if (!result.affected)
      throw new HttpException(
        `There was an error deleting the author`,
        HttpStatus.EXPECTATION_FAILED
      );
    return result;
  }
}
