import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  Relation,
} from 'typeorm';
import { DeviceEntity } from './DeviceEntity';

export interface IDeviceTypeEntity {
  name: string;
}

@Entity('DeviceType')
export class DeviceTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DeviceEntity, device => device.deviceType)
  devices: Relation<DeviceEntity[]>;
}
