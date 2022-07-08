import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from 'typeorm';

import { CommunityEntity } from './CommunityEntity';
import { ContractEntity } from './ContractEntity';
import { EventRulesetEntity } from './EventRulesetEntity';

export enum ClientType {
  TENANT = 'tenant',
  CUSTOMER = 'customer',
}

export interface IClientEntity {
  type: ClientType;
}

@Entity('Client')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ClientType,
  })
  type: ClientType;

  @OneToMany(() => CommunityEntity, community => community.client)
  communities: Relation<CommunityEntity[]>;

  @OneToMany(() => ContractEntity, contract => contract.tenant)
  tenants: Relation<ContractEntity[]>;

  @OneToMany(() => ContractEntity, contract => contract.customer)
  customers: Relation<ContractEntity[]>;

  @OneToMany(() => EventRulesetEntity, ruleset => ruleset.client)
  rulesets: Relation<EventRulesetEntity[]>;
}
