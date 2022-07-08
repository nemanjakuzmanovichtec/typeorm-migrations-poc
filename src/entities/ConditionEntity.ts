import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from 'typeorm';

import { EventRulesetEntity } from './EventRulesetEntity';

export enum ConditionLabels {
  IS_FALL_DETECTED = 'isFallDetected',
  IS_FALL_REPORTED = 'isFallReported',
  IS_IN_BED = 'isInBed',
  IS_ON_TOILET = 'isOnToilet',
  IS_NOT_IN_BED = 'isNotInBed',
  IS_NIGHT_TIME = 'isNightTime',
  IS_DAY_TIME = 'isDayTime',
  IS_IN_ROOM = 'isInRoomAfterAbsence',
  IS_NOT_IN_ROOM = 'isNotInRoom',
}

@Entity('Condition')
export class ConditionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ConditionLabels,
  })
  label: ConditionLabels;

  @Column({ nullable: true })
  startTime: string;

  @Column({ nullable: true })
  endTime: string;

  @ManyToOne(() => EventRulesetEntity, ruleset => ruleset.conditions, {
    orphanedRowAction: 'delete',
  })
  ruleset: Relation<EventRulesetEntity>;
}
