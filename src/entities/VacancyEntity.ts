import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from 'typeorm';

import { ResidentEntity } from './ResidentEntity';
import { RoomEntity } from './RoomEntity';

export interface IVacancyEntity {
  startDate: Date;
  endDate: Date;
  room: RoomEntity;
  resident: ResidentEntity;
}

@Entity('Vacancy')
export class VacancyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @ManyToOne(() => RoomEntity, room => room.vacancies)
  room: Relation<RoomEntity>;

  @ManyToOne(() => ResidentEntity, resident => resident.vacancies)
  resident: Relation<ResidentEntity>;
}
