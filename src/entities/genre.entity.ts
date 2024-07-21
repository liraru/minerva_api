import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Book } from 'src/entities/book.entity';
import { Manga } from 'src/entities/manga.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.GENRE })
export class Genre {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.id)
  books?: Book[];

  @OneToMany(() => Manga, (manga) => manga.id)
  mangas?: Manga[];

  constructor(id: string, name: string, books?: Book[], mangas?: Manga[]) {
    this.id = id;
    this.name = name;
    this.books = books;
    this.mangas = mangas;
  }
}
