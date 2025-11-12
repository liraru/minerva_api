import { ENTITIES } from '@config/index';
import { Book, Manga } from '@entities/index';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.GENRE })
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
