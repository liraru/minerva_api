import { ENTITIES } from '@config/index';
import { Book, Serie, Manga } from '@entities/index';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: ENTITIES.AUTHOR })
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`varchar`, { length: 50, nullable: true })
  lastname?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  birthdate?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  deceasedDate?: string;

  @Column(`boolean`, { nullable: false, default: true })
  active: boolean;

  @Column(`varchar`, { length: 50, nullable: true })
  countryId?: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books?: Book[];

  @ManyToMany(() => Serie, (serie) => serie.authors)
  series?: Serie[];

  @ManyToMany(() => Manga, (manga) => manga.authors)
  mangas?: Manga[];

  constructor(
    id: number,
    name: string,
    lastname?: string,
    birthDate?: string,
    deceasedDate?: string,
    countryId?: string,
    books?: Book[],
    series?: Serie[],
    mangas?: Manga[]
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthDate;
    this.deceasedDate = deceasedDate;
    this.countryId = countryId;
    this.books = books;
    this.series = series;
    this.mangas = mangas;
  }
}
