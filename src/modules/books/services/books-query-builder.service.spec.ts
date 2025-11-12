import { BooksQueryBuilderService } from '@modules/books/services/books-query-builder.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BooksQueryBuilderService', () => {
  let service: BooksQueryBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksQueryBuilderService],
    }).compile();

    service = module.get<BooksQueryBuilderService>(BooksQueryBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
