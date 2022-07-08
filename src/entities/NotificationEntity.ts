import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from 'typeorm';

import { DeviceEntity } from './DeviceEntity';
import { NotificationTypes } from '../enums/NotificationTypes';
import { StatusTypes } from '../enums/StatusTypes';
import { StatusSubtypes } from '../enums/StatusSubtypes';

export interface INotificationEntity {
  type: NotificationTypes;
  startTimestamp: number;
  resolutionTimestamp: number;
  status: StatusTypes;
  device: DeviceEntity;
  statusSubtype: StatusSubtypes;
}

@Entity('Notification')
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: NotificationTypes,
  })
  type: NotificationTypes;

  @Column({ type: 'bigint' })
  startTimestamp: number;

  @Column({ type: 'bigint', default: null })
  resolutionTimestamp: number;

  @Column({
    type: 'enum',
    enum: StatusTypes,
    default: StatusTypes.UNRESOLVED,
  })
  status: StatusTypes;

  @Column({
    type: 'enum',
    enum: StatusSubtypes,
  })
  statusSubtype: StatusSubtypes;

  @ManyToOne(() => DeviceEntity, device => device.notifications, {
    nullable: false,
  })
  device: Relation<DeviceEntity>;
}
