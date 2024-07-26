import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsQueryBuilderService } from './authors-query-builder.service';

describe('AuthorsQueryBuilderService', () => {
  let service: AuthorsQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsQueryBuilderService],
    }).compile();

    service = module.get<AuthorsQueryBuilderService>(AuthorsQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
