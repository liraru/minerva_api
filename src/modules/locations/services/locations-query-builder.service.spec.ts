import { Test, TestingModule } from '@nestjs/testing';
import { LocationsQueryBuilderService } from './locations-query-builder.service';

describe('LocationsQueryBuilderService', () => {
  let service: LocationsQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationsQueryBuilderService]
    }).compile();

    service = module.get<LocationsQueryBuilderService>(LocationsQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
