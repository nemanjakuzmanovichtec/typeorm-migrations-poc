import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  Relation,
} from 'typeorm';

import { VacancyEntity } from './VacancyEntity';

// TODO: Find which fields are required here
export interface IResidentEntity {
  name: string;
}

@Entity('Resident')
export class ResidentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => VacancyEntity, vacancy => vacancy.resident)
  vacancies: Relation<VacancyEntity[]>;
}
