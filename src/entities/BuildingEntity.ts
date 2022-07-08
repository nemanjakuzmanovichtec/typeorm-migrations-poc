import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

import { CommunityEntity } from './CommunityEntity';
import { FloorEntity } from './FloorEntity';

export interface IBuildingEntity {
  name: string;
  community: CommunityEntity;
}

@Entity('Building')
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  clientId: number;

  @ManyToOne(() => CommunityEntity, community => community.buildings)
  community: Relation<CommunityEntity>;

  @OneToMany(() => FloorEntity, floor => floor.building)
  floors: Relation<FloorEntity[]>;
}
