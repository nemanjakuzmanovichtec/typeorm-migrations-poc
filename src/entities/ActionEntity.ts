import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from 'typeorm';

import { EventRulesetEntity } from './EventRulesetEntity';

export enum ActionLabels {
  SEND_FALL_NOTIFICATION = 'sendFallNotification',
  SEND_SMART_NOTIFICATION = 'sendSmartNotification',
  SAVE_TO_DB = 'saveNotificationToDB',
}

@Entity('Action')
export class ActionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ActionLabels,
  })
  label2: ActionLabels;

  @OneToMany(() => EventRulesetEntity, ruleset => ruleset.actions)
  ruleset: Relation<EventRulesetEntity[]>;
}
