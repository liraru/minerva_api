import { MangaChapter } from '@entities/manga-chapter.entity';
import { MangaVolume } from '@entities/manga-volume';
import { Manga } from '@entities/manga.entity';
import { MangaChaptersController } from '@modules/manga/controllers/manga-chapters/manga-chapters.controller';
import { MangaController } from '@modules/manga/controllers/manga/manga.controller';
import { MangaChaptersQueryBuilderService } from '@modules/manga/services/manga-chapters/manga-chapters-query-builder.service';
import { MangaChaptersService } from '@modules/manga/services/manga-chapters/manga-chapters.service';
import { MangaQueryBuilderService } from '@modules/manga/services/manga/manga-query-builder.service';
import { MangaService } from '@modules/manga/services/manga/manga.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MangaController, MangaChaptersController],
  imports: [TypeOrmModule.forFeature([Manga, MangaChapter, MangaVolume])],
  providers: [
    MangaService,
    MangaQueryBuilderService,
    MangaChaptersService,
    MangaChaptersQueryBuilderService
  ]
})
export class MangaModule {}
  