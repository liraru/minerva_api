import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Manga } from 'src/entities/manga.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.MANGA_CHAPTERS })
export class MangaChapter {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Manga, (manga) => manga.mangaChapter)
  manga: Manga;

  @Column(`integer`, { nullable: false })
  pages: number;

  @Column(`varchar`, { length: 50, nullable: false })
  folder: string;

  @Column(`varchar`, { length: 50, nullable: true })
  publicationDate: string;

  constructor(id: number, manga: Manga, pages: number, folder: string, publicationDate: string) {
    this.id = id;
    this.manga = manga;
    this.pages = pages;
    this.folder = folder;
    this.publicationDate = publicationDate;
  }
}
