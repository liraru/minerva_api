// src/modules/stats/stats.module.ts
import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import { Author } from '@entities/author.entity';
import { Serie } from '@entities/serie.entity';
import { Genre } from '@entities/genre.entity';
import { Location } from '@entities/location.entity';
import { Editorial } from '@entities/editorial.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Manga, Author, Serie, Genre, Location, Editorial])
  ],
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule {}
