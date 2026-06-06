import { ENTITIES } from '@config/entity-tagging.constant';
import { Author } from '@entities/author.entity';
import { Editorial } from '@entities/editorial.entity';
import { Genre } from '@entities/genre.entity';
import { Serie } from '@entities/serie.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.BOOK })
export class Book {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
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

  @Column(`varchar`, { length: 50, nullable: false })
  format: string;

  @Column(`varchar`, { length: 10, nullable: true })
  shelfCode: string;

  @ManyToOne(() => Genre, (genre) => genre.books)
  genre: string;

  @Column(`varchar`, { length: 3, nullable: false })
  language: string;

  @Column(`varchar`, { length: 3, nullable: false })
  originalLanguage: string;

  @Column(`varchar`, { length: 10, nullable: false })
  publicationDate: string;

  @ManyToOne(() => Serie, (serie) => serie.books)
  serie?: string;

  @Column(`integer`, { nullable: true })
  edition?: string;

  @ManyToOne(() => Editorial, (editorial) => editorial.books)
  editorial: string;

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

  @Column(`boolean`, { nullable: false })
  active: boolean;

  @Column(`varchar`, { length: 255, nullable: true })
  notes?: string;

  constructor(
    id: string,
    title: string,
    authors: Author[],
    format: string,
    location: string,
    genreId: string,
    language: string,
    originalLanguage: string,
    publicationDate: string,
    serieId: string,
    ownerId: string,
    editorialId: string,
    active: boolean,
    edition?: string,
    downloadLink?: string,
    cover?: string,
    buyDate?: string,
    borrowed?: string,
    notes?: string
  ) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.format = format;
    this.shelfCode = location;
    this.genre = genreId;
    this.language = language;
    this.originalLanguage = originalLanguage;
    this.publicationDate = publicationDate;
    this.serie = serieId;
    this.edition = edition;
    this.editorial = editorialId;
    this.downloadLink = downloadLink;
    this.cover = cover;
    this.buyDate = buyDate;
    this.ownerId = ownerId;
    this.active = active;
    this.borrowed = borrowed;
    this.notes = notes;
  }
}
