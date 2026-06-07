import { Test, TestingModule } from '@nestjs/testing';
import { MangaQueryBuilderService } from './manga-query-builder.service';

describe('MangaQueryBuilderService', () => {
  let service: MangaQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaQueryBuilderService],
    }).compile();

    service = module.get<MangaQueryBuilderService>(MangaQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
