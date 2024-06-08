import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Book } from 'src/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.EDITORIALS })
export class Editorial {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.uuid)
  books: Book[];

  constructor(uuid: string, name: string, books: Book[]) {
    this.uuid = uuid;
    this.name = name;
    this.books = books ?? [];
  }
}
