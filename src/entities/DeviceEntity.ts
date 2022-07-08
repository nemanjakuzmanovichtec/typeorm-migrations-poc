import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';

import { DeviceRoomAssignmentEntity } from './DeviceRoomAssignmentEntity';
import { DeviceTypeEntity } from './DeviceTypeEntity';
import { NotificationEntity } from './NotificationEntity';
import { ExclusionZoneEntity } from './ExclusionZoneEntity';
import { RoomTypes } from '../enums/RoomTypes';

export interface IDeviceEntity {
  deviceType: DeviceTypeEntity;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  zMin: number;
  zMax: number;
  sensorHeight: number;
  ceilingMount: boolean;
  clientId: number;
  deviceId: string;
  serialNumber: string;
  roomType: RoomTypes;
  notifications?: NotificationEntity[];
  exclusionZones?: ExclusionZoneEntity[];
  assignment?: DeviceRoomAssignmentEntity[];
}

@Entity('Device')
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DeviceTypeEntity, deviceType => deviceType.devices)
  deviceType: Relation<DeviceTypeEntity>;

  @Column({ type: 'double', precision: 6, scale: 4 })
  xMin: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  xMax: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  yMin: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  yMax: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  zMin: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  zMax: number;

  @Column({ type: 'double', precision: 6, scale: 4 })
  sensorHeight: number;

  @Column()
  ceilingMount: boolean;

  @Column()
  clientId: number;

  @Column()
  deviceId: string;

  @Column()
  serialNumber: string;

  @Column({
    type: 'enum',
    enum: RoomTypes,
  })
  roomType: RoomTypes;

  @OneToMany(() => NotificationEntity, notification => notification.device)
  notifications: Relation<NotificationEntity[]>;

  @OneToMany(() => ExclusionZoneEntity, exclusionZone => exclusionZone.device, {
    cascade: true,
  })
  exclusionZones: Relation<ExclusionZoneEntity[]>;

  @OneToMany(
    () => DeviceRoomAssignmentEntity,
    deviceRoomAssignment => deviceRoomAssignment.device
  )
  assignment: Relation<DeviceRoomAssignmentEntity[]>;
}
