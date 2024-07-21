import { Test, TestingModule } from '@nestjs/testing';
import { GenresQueryBuilderService } from './genres-query-builder.service';

describe('GenresQueryBuilderService', () => {
  let service: GenresQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenresQueryBuilderService]
    }).compile();

    service = module.get<GenresQueryBuilderService>(GenresQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
