import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Book } from 'src/entities/book.entity';
import { Serie } from 'src/entities/serie.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.AUTHOR })
export class Author {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`varchar`, { length: 50, nullable: true })
  lastname?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  birthdate?: string;

  @Column(`varchar`, { length: 10, nullable: true })
  deceasedDate?: string;

  @Column(`varchar`, { length: 50, nullable: true })
  countryId?: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];

  @ManyToMany(() => Serie, (serie) => serie.authors)
  series: Serie[];

  constructor(uuid: string, name: string, lastname?: string, birthDate?: string, deceasedDate?: string, countryId?: string) {
    this.uuid = uuid;
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthDate;
    this.deceasedDate = deceasedDate;
    this.countryId = countryId;
  }
}
