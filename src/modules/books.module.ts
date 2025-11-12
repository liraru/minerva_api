import { Book } from '@entities/book.entity';
import { Serie } from '@entities/serie.entity';
import { BooksController } from 'src/controllers/books.controller';
import { SeriesController } from 'src/controllers/series.controller';
import { BooksQueryBuilderService } from '@services/books/books-query-builder.service';
import { BooksService } from '@services/books/books.service';
import { SeriesQueryBuilderService } from '@services/books/series-query-builder.service';
import { SeriesService } from '@services/books/series.service';
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
