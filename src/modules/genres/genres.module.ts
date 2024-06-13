import { GenresController } from '@modules/genres/genres.controller';
import { Module } from '@nestjs/common';
import { GenresService } from '@services/genres/genres.service';

@Module({
  providers: [GenresService],
  controllers: [GenresController]
})
export class GenresModule {}
