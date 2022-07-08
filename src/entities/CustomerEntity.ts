import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
} from 'typeorm';

import { ClientEntity } from './ClientEntity';

export interface ICustomerEntity {
  name: string;
  client?: ClientEntity;
  pccOrgUuid?: string;
  customerIdOld?: string;
  fulfillerIdOld?: string;
}
@Entity('Customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  pccOrgUuid: string;

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
