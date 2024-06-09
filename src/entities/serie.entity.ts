import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Author } from 'src/entities/author.entity';
import { Book } from 'src/entities/book.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.SERIE })
export class Serie {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
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

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_series`,
    joinColumn: { name: `authorId`, referencedColumnName: `id` },
    inverseJoinColumn: { name: `serieId`, referencedColumnName: `id` }
  })
  authors?: Author[];

  constructor(id: string, name: string, volumes: number, releaseDate: string, finishDate: string, books: Book[], authors: Author[]) {
    this.id = id;
    this.name = name;
    this.volumes = volumes;
    this.releaseDate = releaseDate;
    this.finishDate = finishDate;
    this.books = books;
    this.authors = authors;
  }
}
