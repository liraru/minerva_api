import { Test, TestingModule } from '@nestjs/testing';
import { MangaChaptersQueryBuilderService } from './manga-chapters-query-builder.service';

describe('MangaChaptersQueryBuilderService', () => {
  let service: MangaChaptersQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaChaptersQueryBuilderService],
    }).compile();

    service = module.get<MangaChaptersQueryBuilderService>(MangaChaptersQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
