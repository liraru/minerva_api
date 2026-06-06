import { ENTITIES } from '@config/entity-tagging.constant';
import { Book } from '@entities/book.entity';
import { Manga } from '@entities/manga.entity';
import { Serie } from '@entities/serie.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.AUTHOR })
export class Author {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  id: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`varchar`, { length: 50, nullable: true })
  lastname?: string;

  @Column(`varchar`, { length: 255, nullable: true })
  biography?: string;

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
    id: string,
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
    this.active = true;
  }
}
