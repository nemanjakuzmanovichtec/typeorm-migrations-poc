import { Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';

import { DeviceEntity } from './DeviceEntity';
import { RoomEntity } from './RoomEntity';

export interface IDeviceRoomAssignmentEntity {
  device: DeviceEntity;
  room: RoomEntity;
}

@Entity('DeviceRoomAssignment')
export class DeviceRoomAssignmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DeviceEntity, device => device.assignment)
  device: Relation<DeviceEntity>;

  @ManyToOne(() => RoomEntity, room => room.assignment)
  room: Relation<RoomEntity>;
}
