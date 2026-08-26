import { Test, TestingModule } from '@nestjs/testing';
import { MangaVolumeService } from './manga-volume.service';

describe('MangaVolumeService', () => {
  let service: MangaVolumeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaVolumeService],
    }).compile();

    service = module.get<MangaVolumeService>(MangaVolumeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
