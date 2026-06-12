import { ENTITIES } from '@config/entity-tagging.constant';
import { Author } from '@entities/author.entity';
import { Book } from '@entities/book.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';

@Entity({ name: ENTITIES.SERIE })
export class Serie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 150, nullable: false })
  name: string;

  @Column(`varchar`, { length: 255, nullable: true })
  description?: string;

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
    joinColumn: { name: `serieId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `authorId`, referencedColumnName: `id` },
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
