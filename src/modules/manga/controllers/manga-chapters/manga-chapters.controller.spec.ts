import { Test, TestingModule } from '@nestjs/testing';
import { MangaChaptersController } from './manga-chapters.controller';

describe('MangaChaptersController', () => {
  let controller: MangaChaptersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangaChaptersController],
    }).compile();

    controller = module.get<MangaChaptersController>(MangaChaptersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
