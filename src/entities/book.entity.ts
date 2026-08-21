import { ENTITIES } from '@config/entity-tagging.constant';
import { Author } from '@entities/author.entity';
import { Editorial } from '@entities/editorial.entity';
import { Genre } from '@entities/genre.entity';
import { Location } from '@entities/location.entity';
import { Serie } from '@entities/serie.entity';
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

  @Column(`varchar`, { length: 150, nullable: false })
  title: string;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_books`,
    joinColumn: { name: `bookId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `authorId`, referencedColumnName: `id` },
  })
  authors: Author[];

  @Column(`varchar`, { length: 13, nullable: true })
  isbn?: string;

  @Column(`boolean`, { nullable: false, default: false })
  isDigital: boolean;

  @Column(`varchar`, { length: 50, nullable: false })
  format: string;

  @ManyToOne(() => Location, (location) => location.books, { nullable: true })
  location: Location;

  @ManyToOne(() => Genre, (genre) => genre.books, { nullable: true })
  genre: Genre;

  @Column(`varchar`, { length: 3, nullable: false })
  language: string;

  @Column(`varchar`, { length: 3, nullable: false })
  originalLanguage: string;

  @Column(`varchar`, { length: 10, nullable: false })
  publicationDate: string;

  @ManyToOne(() => Serie, (serie) => serie.books, { nullable: true })
  serie?: Serie;

  @Column(`integer`, { nullable: true })
  edition?: number;

  @ManyToOne(() => Editorial, (editorial) => editorial.books, { nullable: true })
  editorial: Editorial;

  @Column(`varchar`, { length: 150, nullable: true })
  downloadLink?: string;

  @Column(`varchar`, { length: 150, nullable: true })
  cover?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  buyDate?: string;

  @Column(`varchar`, { length: 50, nullable: false })
  ownerId: string;

  @Column(`varchar`, { length: 50, nullable: true })
  borrowed?: string;

  @Column(`boolean`, { nullable: false, default: true })
  active: boolean;

  @Column(`varchar`, { length: 255, nullable: true })
  notes?: string;

  constructor(
    title: string,
    isDigital: boolean,
    authors: Author[],
    isbn: string,
    format: string,
    location: Location,
    genre: Genre,
    language: string,
    originalLanguage: string,
    publicationDate: string,
    serie: Serie,
    ownerId: string,
    editorial: Editorial,
    active: boolean,
    id?: string,
    edition?: number,
    downloadLink?: string,
    cover?: string,
    buyDate?: string,
    borrowed?: string,
    notes?: string
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.isbn = isbn;
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
    this.notes = notes;
  }
}
