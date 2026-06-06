import { ENTITIES } from '@config/entity-tagging.constant';
import { Author } from '@entities/author.entity';
import { Editorial } from '@entities/editorial.entity';
import { Genre } from '@entities/genre.entity';
import { MangaChapter } from '@entities/manga-chapter.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { MANGA_STATUS } from '../constants/manga.constant';

@Entity({ name: ENTITIES.MANGA })
export class Manga {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 150, nullable: false })
  title: string;

  @Column(`varchar`, { length: 255, nullable: true })
  synopsis?: string;

  @Column(`varchar`, { length: 20, nullable: false, default: MANGA_STATUS.ONGOING })
  status: MANGA_STATUS = MANGA_STATUS.ONGOING;

  @ManyToMany(() => Author, (author) => author.mangas, { cascade: true })
  @JoinTable({
    name: `author_manga`,
    joinColumn: { name: `authorId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `mangaId`, referencedColumnName: `id` }
  })
  authors: Author[];

  @Column(`boolean`, { nullable: false })
  isDigital: boolean = false;

  @Column(`varchar`, { length: 150, nullable: true })
  cover: string;

  @ManyToOne(() => Editorial, (editorial) => editorial.mangas)
  editorial: Editorial;

  @ManyToOne(() => Genre, (genre) => genre.mangas)
  genre: Genre;

  @ManyToOne(() => Location, (location) => location.mangas)
  location: Location;

  @OneToMany(() => MangaChapter, (chapter) => chapter.id)
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
    title: string,
    isDigital: boolean,
    cover: string,
    authors: Author[],
    editorial: Editorial,
    volumes: number,
    firstVolumeDate: string,
    originalLanguage: string,
    language: string,
    id?: string,
    lastVolumeDate?: string,
    mangaChapter?: MangaChapter[]
  ) {
    this.id = id;
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
