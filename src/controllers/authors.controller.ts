import { Author } from '@entities/index';
import { AuthorsService } from '@services/index';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly _authorsService: AuthorsService) {}

  @Get(``)
  public getList() {
    return this._authorsService.getList();
  }

  @Get(`/:id`)
  public getById(@Param(`id`) id: string) {
    return this._authorsService.getById(id, true);
  }

  @Post(``)
  public create(@Body() author: Author) {
    return this._authorsService.create(author);
  }

  @Put(`/:id`)
  public update(@Param(`id`) id: string, @Body() author: Partial<Author>) {
    return this._authorsService.update(id, author);
  }

  @Patch(`/:id/activate`)
  public activate(@Param(`id`) id: string) {
    this._authorsService.changeActive(id, true);
  }

  @Delete(`/:id/deactivate`)
  public delete(@Param(`id`) id: string) {
    this._authorsService.changeActive(id, false);
  }
}
