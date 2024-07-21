import { GenresService } from '@modules/genres/services/genres.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GenresService', () => {
  let service: GenresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenresService]
    }).compile();

    service = module.get<GenresService>(GenresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
