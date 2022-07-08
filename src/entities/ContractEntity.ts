import { Entity, PrimaryGeneratedColumn, ManyToOne, Relation } from 'typeorm';

import { ClientEntity } from './ClientEntity';

export interface IContractEntity {
  tenant: ClientEntity;
  customer: ClientEntity;
}

@Entity('Contract')
export class ContractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ClientEntity, client => client.tenants)
  tenant: Relation<ClientEntity>;

  @ManyToOne(() => ClientEntity, client => client.customers)
  customer: Relation<ClientEntity>;
}
