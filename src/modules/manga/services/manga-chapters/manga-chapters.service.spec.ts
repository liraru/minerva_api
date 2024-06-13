import { Test, TestingModule } from '@nestjs/testing';
import { MangaChaptersService } from './manga-chapters.service';

describe('MangaChaptersService', () => {
  let service: MangaChaptersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaChaptersService],
    }).compile();

    service = module.get<MangaChaptersService>(MangaChaptersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
