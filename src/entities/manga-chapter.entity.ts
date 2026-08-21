import { ENTITIES } from '@config/entity-tagging.constant';
import { Manga } from '@entities/manga.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.MANGA_CHAPTERS })
export class MangaChapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Manga, (manga) => manga.mangaChapter)
  manga: Manga;

  @Column(`integer`, { nullable: false })
  pages: number;

  @Column(`varchar`, { length: 50, nullable: false })
  folder: string;

  @Column(`varchar`, { length: 50, nullable: true })
  publicationDate: string;

  constructor(
    manga: Manga,
    pages: number,
    folder: string,
    publicationDate: string,
    id?: string
  ) {
    this.id = id;
    this.manga = manga;
    this.pages = pages;
    this.folder = folder;
    this.publicationDate = publicationDate;
  }
}
