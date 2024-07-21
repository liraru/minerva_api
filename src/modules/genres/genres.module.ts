import { GenresController } from '@modules/genres/genres.controller';
import { Module } from '@nestjs/common';
import { GenresQueryBuilderService } from '@services/genres/genres-query-builder/genres-query-builder.service';
import { GenresService } from '@services/genres/genres.service';

@Module({
  providers: [GenresService, GenresQueryBuilderService],
  controllers: [GenresController]
})
export class GenresModule {}
