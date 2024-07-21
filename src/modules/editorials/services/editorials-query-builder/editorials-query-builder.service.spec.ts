import { Test, TestingModule } from '@nestjs/testing';
import { EditorialsQueryBuilderService } from './editorials-query-builder.service';

describe('EditorialsQueryBuilderService', () => {
  let service: EditorialsQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorialsQueryBuilderService],
    }).compile();

    service = module.get<EditorialsQueryBuilderService>(EditorialsQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
