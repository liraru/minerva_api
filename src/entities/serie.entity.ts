import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Author } from 'src/entities/author.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.SERIE })
export class Serie {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @Column(`integer`, { nullable: false })
  volumes: number;

  @Column(`varchar`, { length: 10, nullable: true })
  releaseDate: string;

  @Column(`varchar`, { length: 10, nullable: true })
  finishDate?: string;

  @ManyToMany(() => Author, (author) => author.books, { cascade: true })
  @JoinTable({
    name: `author_series`,
    joinColumn: { name: `serieId`, referencedColumnName: `uuid` },
    inverseJoinColumn: { name: `bookId`, referencedColumnName: `uuid` }
  })
  authors?: Author[];

  constructor(uuid: string, name: string, volumes: number, releaseDate: string, finishDate: string, authors: Author[]) {
    this.uuid = uuid;
    this.name = name;
    this.volumes = volumes;
    this.releaseDate = releaseDate;
    this.finishDate = finishDate;
    this.authors = authors ?? [];
  }
}
