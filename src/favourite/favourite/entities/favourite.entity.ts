import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../user/user/entities/user.entity';
import { Event } from '../../../event/event/entities/event.entity';

@Entity({ name: 'favourites' })
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Event)
  event: Event;
  @ManyToOne(() => User)
  user: User;
}
