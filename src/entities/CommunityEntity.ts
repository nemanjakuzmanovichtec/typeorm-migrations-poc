import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

import { BuildingEntity } from './BuildingEntity';
import { ClientEntity } from './ClientEntity';

export interface ICommunityEntity {
  name: string;
  geolocation: string;
  timezone?: string;
  client: ClientEntity;
}

@Entity('Community')
export class CommunityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  geolocation: string;

  @Column({ nullable: true })
  timezone: string;

  @ManyToOne(() => ClientEntity, client => client.communities)
  client: Relation<ClientEntity>;

  @OneToMany(() => BuildingEntity, building => building.community)
  buildings: Relation<BuildingEntity[]>;
}
