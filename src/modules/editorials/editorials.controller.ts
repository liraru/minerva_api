import { Genre } from '@entities/genre.entity';
import { EditorialsService } from '@modules/editorials/services/editorials/editorials.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('editorials')
export class EditorialsController {
  constructor(private readonly _editorialsService: EditorialsService) {}

  @Get(``)
  public getList() {
    return this._editorialsService.getList();
  }

  @Get(`/:id`)
  public getById(@Param(`id`) id: string) {
    return this._editorialsService.getById(id);
  }

  @Post(``)
  public create(@Body() genre: Partial<Genre>) {
    return this._editorialsService.create(genre.name);
  }

  @Put(`/:id`)
  public update(@Param(`id`) id: string, @Body() genre: Genre) {
    return this._editorialsService.update(id, genre);
  }

  @Delete(`/:id`)
  public delete(@Param(`id`) id: string) {
    return this._editorialsService.delete(id);
  }
}
