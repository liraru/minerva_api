import { Editorial } from '@entities/editorial.entity';
import { EditorialsService } from '@modules/editorials/services/editorials/editorials.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('editorials')
export class EditorialsController {
  constructor(private readonly _editorialsService: EditorialsService) {}

  @Get('')
  public getList() {
    return this._editorialsService.getList();
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._editorialsService.getById(id);
  }

  @Post('')
  public create(@Body() editorial: Partial<Editorial>) {
    return this._editorialsService.create(editorial.name);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() editorial: Editorial) {
    return this._editorialsService.update(id, editorial);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._editorialsService.delete(id);
  }
}
