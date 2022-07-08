import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

import { BuildingEntity } from './BuildingEntity';
import { RoomEntity } from './RoomEntity';

export interface IFloorEntity {
  name: string;
  building: BuildingEntity;
}

@Entity('Floor')
export class FloorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  clientId: number;

  @ManyToOne(() => BuildingEntity, building => building.floors)
  building: Relation<BuildingEntity>;

  @OneToMany(() => RoomEntity, room => room.floor)
  rooms: Relation<RoomEntity[]>;
}
