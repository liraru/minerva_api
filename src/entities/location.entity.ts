import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Book } from 'src/entities/book.entity';
import { Manga } from 'src/entities/manga.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: ENTITIES.LOCATION })
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  address: string;

  @Column(`varchar`, { length: 50, nullable: false })
  room: string;

  @Column(`varchar`, { length: 50, nullable: false })
  shelf: string;

  @Column(`varchar`, { length: 250, nullable: true })
  observations: string;

  @OneToMany(() => Book, (book) => book.id)
  books?: Book[];

  @OneToMany(() => Manga, (manga) => manga.id)
  mangas?: Manga[];

  constructor(
    address: string,
    room: string,
    shelf: string,
    id?: string,
    observations?: string,
    books?: Book[],
    mangas?: Manga[]
  ) {
    this.id = id;
    this.room = room;
    this.shelf = shelf;
    this.address = address;
    this.observations = observations;
    this.books = books;
    this.mangas = mangas;
  }
}
