import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import { Author } from '@entities/author.entity';
import { Serie } from '@entities/serie.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Manga, Author, Serie])],
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule {}
