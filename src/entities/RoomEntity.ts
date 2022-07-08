import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

import { FloorEntity } from './FloorEntity';
import { VacancyEntity } from './VacancyEntity';
import { DeviceRoomAssignmentEntity } from './DeviceRoomAssignmentEntity';

export interface IRoomEntity {
  name: string;
  floor: FloorEntity;
}

@Entity('Room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  clientId: string;

  @ManyToOne(() => FloorEntity, floor => floor.rooms)
  floor: Relation<FloorEntity>;

  @OneToMany(() => VacancyEntity, vacancy => vacancy.room)
  vacancies: Relation<VacancyEntity[]>;

  @OneToMany(
    () => DeviceRoomAssignmentEntity,
    deviceRoomAssignment => deviceRoomAssignment.room
  )
  assignment: Relation<DeviceRoomAssignmentEntity[]>;
}
