import { Genre } from '@entities/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GenresController,
  GenresService,
  GenresQueryBuilderService
} from '@modules/genres';

@Module({
  controllers: [GenresController],
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenresService, GenresQueryBuilderService]
})
export class GenresModule {}
