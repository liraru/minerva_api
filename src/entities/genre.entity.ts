import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Book } from 'src/entities/book.entity';
import { Manga } from 'src/entities/manga-serie.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.GENRE })
export class Genre {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.uuid)
  books: Book[];

  @OneToMany(() => Manga, (manga) => manga.uuid)
  mangas: Manga[];

  constructor(uuid: string, name: string, books: Book[], mangas: Manga[]) {
    this.uuid = uuid;
    this.name = name;
    this.books = books ?? [];
    this.mangas = mangas ?? [];
  }
}
