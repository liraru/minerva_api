import { ENTITIES } from '@config/index';
import { Book, Manga } from '@entities/index';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.LOCATION })
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`varchar`, { length: 250, nullable: true })
  observations: string;

  @OneToMany(() => Book, (book) => book.id)
  books?: Book[];

  @OneToMany(() => Manga, (manga) => manga.id)
  mangas?: Manga[];

  constructor(
    name: string,
    observations: string,
    id?: string,
    books?: Book[],
    mangas?: Manga[]
  ) {
    this.id = id;
    this.name = name;
    this.observations = observations;
    this.books = books;
    this.mangas = mangas;
  }
}
