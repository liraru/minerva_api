import { Location } from '@entities/index';
import { LocationsService } from '@modules/locations';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('locations')
export class LocationsController {
  constructor(private readonly _locationsService: LocationsService) {}

  @Get(``)
  public getList() {
    return this._locationsService.getList();
  }

  @Get(`/:id`)
  public getById(@Param(`id`) id: string) {
    return this._locationsService.getById(id);
  }

  @Post(``)
  public create(@Body() location: Location) {
    return this._locationsService.create(location);
  }

  @Put(`/:id`)
  public update(@Param(`id`) id: string, @Body() location: Location) {
    return this._locationsService.update(id, location);
  }

  @Delete(`/:id`)
  public delete(@Param(`id`) id: string) {
    return this._locationsService.delete(id);
  }
}
