import { ENTITY } from '@config/entity-tagging.constant';
import { Manga } from '@entities/manga.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITY.MANGA_VOLUMES })
export class MangaVolume {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Manga, (manga) => manga.mangaChapter)
  manga: Manga;

  @Column(`varchar`, { length: 50, nullable: false })
  volume: string;

  @Column(`integer`, { nullable: false })
  pages: number;
}
