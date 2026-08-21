import { ConstantsService } from '@modules/constants/constants.service';
import { Controller, Get } from '@nestjs/common';

@Controller('constants')
export class ConstantsController {
  constructor(private readonly _constantsService: ConstantsService) {}

  @Get('countries')
  public getCountries() {
    return this._constantsService.getCountries();
  }

  @Get('languages')
  public getLanguages() {
    return this._constantsService.getLanguages();
  }
}
