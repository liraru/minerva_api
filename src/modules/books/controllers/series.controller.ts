import { Serie } from '@entities/serie.entity';
import { SeriesService } from '@modules/books/services/series.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('series')
export class SeriesController {
  constructor(private readonly _seriesService: SeriesService) {}

  @Get()
  public getList() {
    return this._seriesService.getList();
  }

  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this._seriesService.getById(id);
  }

  @Post()
  public create(@Body() serie: Serie) {
    return this._seriesService.create(serie);
  }

  @Put('/:id')
  public update(@Param('id') id: string, @Body() serie: Partial<Serie>) {
    return this._seriesService.update(id, serie);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    return this._seriesService.delete(id);
  }
}
