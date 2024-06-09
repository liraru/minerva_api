import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Author } from 'src/entities/author.entity';
import { Editorial } from 'src/entities/editorial.entity';
import { Genre } from 'src/entities/genre.entity';
import { MangaChapter } from 'src/entities/manga-chapter.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.MANGA })
export class Manga {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 150, nullable: false })
  title: string;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_manga_serie`,
    joinColumn: { name: `authorId`, referencedColumnName: `uuid` },
    inverseJoinColumn: { name: `bookId`, referencedColumnName: `uuid` }
  })
  authors: Author[];

  @Column(`boolean`, { nullable: false })
  isDigital: boolean = false;

  @Column(`varchar`, { length: 150, nullable: true })
  cover: string;

  @ManyToOne(() => Editorial, (editorial) => editorial.manga)
  editorial: Editorial;

  @ManyToOne(() => Genre, (genre) => genre.mangas)
  genre: Genre;

  @OneToMany(() => MangaChapter, (chapter) => chapter.uuid)
  mangaChapter?: MangaChapter[];

  @Column(`integer`, { nullable: false })
  volumes: number;

  @Column(`varchar`, { length: 10, nullable: false })
  firstVolumeDate: string;

  @Column(`varchar`, { length: 10, nullable: true })
  lastVolumeDate?: string;

  @Column(`varchar`, { length: 3, nullable: false })
  originalLanguage: string;

  @Column(`varchar`, { length: 3, nullable: false })
  language: string;

  constructor(
    uuid: string,
    title: string,
    isDigital: boolean,
    cover: string,
    authors: Author[],
    editorial: Editorial,
    volumes: number,
    firstVolumeDate: string,
    originalLanguage: string,
    language: string,
    lastVolumeDate?: string,
    mangaChapter?: MangaChapter[]
  ) {
    this.uuid = uuid;
    this.title = title;
    this.cover = cover;
    this.isDigital = isDigital;
    this.authors = authors;
    this.mangaChapter = mangaChapter;
    this.editorial = editorial;
    this.volumes = volumes;
    this.firstVolumeDate = firstVolumeDate;
    this.lastVolumeDate = lastVolumeDate;
    this.originalLanguage = originalLanguage;
    this.language = language;
  }
}
