import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Author } from 'src/entities/author.entity';
import { Editorial } from 'src/entities/editorial.entity';
import { Genre } from 'src/entities/genre.entity';
import { Serie } from 'src/entities/serie.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.BOOK })
export class Book {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  title: string;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_books`,
    joinColumn: { name: `authorId`, referencedColumnName: `uuid` },
    inverseJoinColumn: { name: `bookId`, referencedColumnName: `uuid` }
  })
  authors: Author[];

  @Column(`varchar`, { length: 50, nullable: false })
  format: string;

  @Column(`varchar`, { length: 50, nullable: false })
  location: string;

  @ManyToOne(() => Genre, (genre) => genre.books)
  genreId: string;

  @Column(`varchar`, { length: 3, nullable: false })
  language: string;

  @Column(`varchar`, { length: 3, nullable: false })
  originalLanguage: string;

  @Column(`varchar`, { length: 10, nullable: false })
  publicationDate: string;

  @ManyToOne(() => Serie, (serie) => serie.books)
  serieId: string;

  @Column(`integer`, { nullable: true })
  edition?: string;

  @ManyToOne(() => Editorial, (editorial) => editorial.books)
  editorialId: string;

  @Column(`varchar`, { length: 150, nullable: true })
  downloadLink?: string;

  @Column(`varchar`, { length: 150, nullable: true })
  cover?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  buyDate?: string;

  @Column(`varchar`, { length: 50, nullable: false })
  ownerId: string;
}
