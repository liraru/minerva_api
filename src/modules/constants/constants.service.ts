import { Injectable } from '@nestjs/common';
import { COUNTRIES, LANGUAGES } from '../../constants';

export interface Master {
  code: string;
  name: string;
}

@Injectable()
export class ConstantsService {
  getCountries(): Master[] {
    return COUNTRIES as Master[];
  }

  getLanguages(): Master[] {
    return LANGUAGES as Master[];
  }
}
