import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Relation,
} from 'typeorm';

import { ConditionEntity } from './ConditionEntity';
import { ActionEntity } from './ActionEntity';
import { ClientEntity } from './ClientEntity';
import { StatusSubtypes } from '../enums/StatusSubtypes';

export enum EventRulesetTypes {
  FALL = 'FALL',
  SMART = 'SMART',
  INFO = 'INFO',
}

export interface IEventRulesetEntity {
  type: EventRulesetTypes;
  client: ClientEntity;
  label: StatusSubtypes;
  active: boolean;
  context: number;
  sound: boolean;
  description: string;
  conditions: ConditionEntity[];
  actions: ActionEntity[];
}

@Entity('EventRuleset')
export class EventRulesetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: EventRulesetTypes,
  })
  type: EventRulesetTypes;

  @Column({
    type: 'enum',
    enum: StatusSubtypes,
  })
  label: StatusSubtypes;

  @Column()
  active: boolean;

  @Column()
  context: number;

  @Column()
  sound: boolean;

  @Column()
  description: string;

  @ManyToOne(() => ClientEntity, client => client.rulesets)
  client: Relation<ClientEntity>;

  @OneToMany(() => ConditionEntity, condition => condition.ruleset, {
    cascade: ['insert', 'remove', 'update'],
  })
  conditions: Relation<ConditionEntity[]>;

  @ManyToMany(() => ActionEntity, action => action.ruleset, {
    cascade: ['insert', 'remove', 'update'],
  })
  @JoinTable()
  actions: Relation<ActionEntity[]>;
}
