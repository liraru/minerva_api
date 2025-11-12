import { Genre } from '@entities/genre.entity';
import { GenresController } from 'src/controllers/genres.controller';
import { GenresQueryBuilderService } from '@services/genres/genres-query-builder.service';
import { GenresService } from '@services/genres/genres.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GenresController],
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenresService, GenresQueryBuilderService]
})
export class GenresModule {}
