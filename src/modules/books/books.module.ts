import { Book } from '@entities/book.entity';
import { Serie } from '@entities/serie.entity';
import { BooksController } from '@modules/books/controllers/books.controller';
import { SeriesController } from '@modules/books/controllers/series.controller';
import { BooksQueryBuilderService } from '@modules/books/services/books-query-builder.service';
import { BooksService } from '@modules/books/services/books.service';
import { SeriesQueryBuilderService } from '@modules/books/services/series-query-builder.service';
import { SeriesService } from '@modules/books/services/series.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BooksController, SeriesController],
  imports: [TypeOrmModule.forFeature([Book, Serie])],
  providers: [
    BooksService,
    BooksQueryBuilderService,
    SeriesService,
    SeriesQueryBuilderService
  ]
})
export class BooksModule {}
