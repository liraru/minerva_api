import { Editorial } from '@entities/editorial.entity';
import { EditorialsQueryBuilderService } from '@modules/editorials/services/editorials-query-builder/editorials-query-builder.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EditorialsService {
  constructor(private readonly _editorialsQB: EditorialsQueryBuilderService) {}

  async getList(): Promise<Editorial[]> {
    return this._editorialsQB.get();
  }

  async getById(id: string): Promise<Editorial> {
    const items = await this._editorialsQB.get(id);
    if (!items.length) {
      throw new HttpException(
        `Editorial with ID ${id} doesn't exist.`,
        HttpStatus.NOT_FOUND
      );
    }
    return items[0];
  }

  async create(name: string): Promise<Editorial> {
    const result = await this._editorialsQB.create(name);
    if (!result) {
      throw new HttpException(
        `There was an error creating the editorial`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
    return this.getById(result.identifiers[0]!.id);
  }

  async update(id: string, editorial: Editorial): Promise<Editorial> {
    const stored = await this.getById(id);
    const merged = { ...stored, ...editorial };
    const result = await this._editorialsQB.update(id, merged);
    if (!result.affected) {
      throw new HttpException(
        `There was an error updating the editorial`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
    return this.getById(id);
  }

  async delete(id: string): Promise<void> {
    const result = await this._editorialsQB.delete(id);
    if (!result.affected) {
      throw new HttpException(
        `There was an error deleting the editorial`,
        HttpStatus.EXPECTATION_FAILED
      );
    }
  }
}
