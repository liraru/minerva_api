import { Test, TestingModule } from '@nestjs/testing';
import { SeriesQueryBuilderService } from './series-query-builder.service';

describe('SeriesQueryBuilderService', () => {
  let service: SeriesQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesQueryBuilderService],
    }).compile();

    service = module.get<SeriesQueryBuilderService>(SeriesQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
