import { ENTITIES } from 'src/config/entity-tagging.constant';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: ENTITIES.EDITORIALS })
export class Editorial {
  @PrimaryColumn(`varchar`, { length: 50, nullable: false })
  uuid: string;

  @Column(`varchar`, { length: 50, nullable: false })
  name: string;
}
