import { Test, TestingModule } from '@nestjs/testing';
import { ConstantsService } from './constants.service';

describe('ConstantsService', () => {
  let service: ConstantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstantsService]
    }).compile();

    service = module.get<ConstantsService>(ConstantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getCountries() should return all countries', () => {
    const countries = service.getCountries();
    expect(countries.length).toBeGreaterThan(0);
  });

  it('getLanguages() should return all languages', () => {
    const languages = service.getLanguages();
    expect(languages.length).toBeGreaterThan(0);
  });
});
