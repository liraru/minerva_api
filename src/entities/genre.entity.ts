import { ENTITY } from '@config/entity-tagging.constant';
import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: ENTITY.GENRE })
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.id)
  books?: Book[];

  @OneToMany(() => Manga, (manga) => manga.id)
  mangas?: Manga[];

  constructor(name: string, id?: string, books?: Book[], mangas?: Manga[]) {
    this.id = id;
    this.name = name;
    this.books = books;
    this.mangas = mangas;
  }
}
