import { ENTITIES } from '@config/index';
import { Author, Editorial, Genre, Location, Serie } from '@entities/index';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: ENTITIES.BOOK })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  title: string;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_books`,
    joinColumn: { name: `authorId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `bookId`, referencedColumnName: `id` }
  })
  authors: Author[];

  @Column(`boolean`, { nullable: false })
  isDigital: boolean = false;

  @Column(`varchar`, { length: 50, nullable: false })
  format: string;

  @ManyToOne(() => Location, (location) => location.books)
  location: Location;

  @ManyToOne(() => Genre, (genre) => genre.books)
  genre: Genre;

  @Column(`varchar`, { length: 3, nullable: false })
  language: string;

  @Column(`varchar`, { length: 3, nullable: false })
  originalLanguage: string;

  @Column(`varchar`, { length: 10, nullable: false })
  publicationDate: string;

  @ManyToOne(() => Serie, (serie) => serie.books)
  serie?: Serie;

  @Column(`integer`, { nullable: true })
  edition?: string;

  @ManyToOne(() => Editorial, (editorial) => editorial.books)
  editorial: Editorial;

  @Column(`varchar`, { length: 150, nullable: true })
  downloadLink?: string;

  @Column(`varchar`, { length: 150, nullable: true })
  cover?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  buyDate?: string;

  @Column(`varchar`, { length: 50, nullable: false })
  ownerId: number;

  @Column(`varchar`, { length: 50, nullable: true })
  borrowed?: string;

  @Column(`boolean`, { nullable: false })
  active: boolean;

  constructor(
    title: string,
    isDigital: boolean,
    authors: Author[],
    format: string,
    location: Location,
    genre: Genre,
    language: string,
    originalLanguage: string,
    publicationDate: string,
    serie: Serie,
    ownerId: number,
    editorial: Editorial,
    active: boolean,
    id?: string,
    edition?: string,
    downloadLink?: string,
    cover?: string,
    buyDate?: string,
    borrowed?: string
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.isDigital = isDigital;
    this.format = format;
    this.location = location;
    this.genre = genre;
    this.language = language;
    this.originalLanguage = originalLanguage;
    this.publicationDate = publicationDate;
    this.serie = serie;
    this.edition = edition;
    this.editorial = editorial;
    this.downloadLink = downloadLink;
    this.cover = cover;
    this.buyDate = buyDate;
    this.ownerId = ownerId;
    this.active = active;
    this.borrowed = borrowed;
  }
}
