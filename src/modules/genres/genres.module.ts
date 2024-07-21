import { Genre } from '@entities/genre.entity';
import { GenresController } from '@modules/genres/genres.controller';
import { GenresQueryBuilderService } from '@modules/genres/services/genres-query-builder/genres-query-builder.service';
import { GenresService } from '@modules/genres/services/genres.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GenresController],
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenresService, GenresQueryBuilderService]
})
export class GenresModule {}
