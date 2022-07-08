import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface ICustomerClientAssignmentEntity {
  id?: number;
  customerIdOld: string;
  fulfillerIdOld: string;
  clientId?: number;
}

@Entity('CustomerClientAssignment')
export class CustomerClientAssignmentEntity
  implements ICustomerClientAssignmentEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true, default: null })
  customerIdOld: string;

  @Column({ nullable: true, default: null })
  fulfillerIdOld: string;

  @Column({ nullable: true })
  clientId: number;
}
