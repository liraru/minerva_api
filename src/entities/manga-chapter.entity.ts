import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Manga } from 'src/entities/manga.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.MANGA_CHAPTERS })
export class MangaChapter {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @ManyToOne(() => Manga, (manga) => manga.mangaChapter)
  manga: Manga;

  @Column(`integer`, { nullable: false })
  pages: number;

  @Column(`varchar`, { length: 50, nullable: false })
  folder: string;

  @Column(`varchar`, { length: 50, nullable: false })
  publicationDate: string;

  constructor(uuid: string, manga: Manga, pages: number, folder: string, publicationDate: string) {
    this.uuid = uuid;
    this.manga = manga;
    this.pages = pages;
    this.folder = folder;
    this.publicationDate = publicationDate;
  }
}
