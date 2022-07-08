import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Relation,
} from 'typeorm';

import { DeviceEntity } from './DeviceEntity';

export interface IExclusionZoneEntity {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  name: string;
  device?: DeviceEntity;
}

@Entity('ExclusionZone')
export class ExclusionZoneEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  xMin: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  xMax: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  yMin: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  yMax: number;

  @Column()
  name: string;

  @ManyToOne(() => DeviceEntity, device => device.exclusionZones)
  device: Relation<DeviceEntity>;
}
