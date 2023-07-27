import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../user/user/entities/user.entity';
import { Event } from '../../../event/event/entities/event.entity';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  message: string;
  @Column()
  commentedAt: Date;
  @ManyToOne(() => Event)
  event: Event;
  @ManyToOne(() => User)
  user: User;
}
