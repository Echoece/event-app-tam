import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../user/user/entities/user.entity';
import { Event } from '../../../event/event/entities/event.entity';

@Entity({ name: 'event-registration' })
export class EventRegistration {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  eventRegistrationDate: Date;
  @ManyToOne(() => Event)
  event: Event;
  @ManyToOne(() => User)
  user: User;
}
