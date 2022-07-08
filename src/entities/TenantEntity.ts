import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
} from 'typeorm';

import { ClientEntity } from './ClientEntity';

export interface ITenantEntity {
  name: string;
  domain: string;
  client?: ClientEntity;
  customerIdOld?: string;
  fulfillerIdOld?: string;
}

@Entity('Tenant')
export class TenantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  domain: string;

  @Column({ name: 'clientId' })
  clientId: number;

  @OneToOne(() => ClientEntity)
  @JoinColumn()
  client: Relation<ClientEntity>;

  @Column({
    nullable: true,
    // default: '',
    select: false,
    insert: false,
    update: false,
  })
  customerIdOld: string;

  @Column({
    nullable: true,
    // default: '',
    select: false,
    insert: false,
    update: false,
  })
  fulfillerIdOld: string;
}
