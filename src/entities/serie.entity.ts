import { ENTITIES } from '@config/index';
import { Author, Book } from '@entities/index';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: ENTITIES.SERIE })
export class Serie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`integer`, { nullable: false })
  volumes: number;

  @Column(`varchar`, { length: 10, nullable: true })
  releaseDate: string;

  @Column(`varchar`, { length: 10, nullable: true })
  finishDate?: string;

  @OneToMany(() => Book, (book) => book.id)
  books: Book[];

  @ManyToMany(() => Author, (author) => author.series, { cascade: true })
  @JoinTable({
    name: `author_series`,
    joinColumn: { name: `authorId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `serieId`, referencedColumnName: `id` }
  })
  authors: Author[];

  constructor(
    name: string,
    volumes: number,
    releaseDate: string,
    finishDate: string,
    books: Book[],
    authors: Author[],
    id?: string
  ) {
    this.id = id;
    this.name = name;
    this.volumes = volumes;
    this.releaseDate = releaseDate;
    this.finishDate = finishDate;
    this.books = books;
    this.authors = authors;
  }
}
