import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../../category/category/entities/category.entity';
import { User } from '../../../user/user/entities/user.entity';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  details: string;
  @Column()
  eventDate: Date;
  @Column()
  eventImgURL: string;
  @Column()
  isPaid: boolean;
  @Column()
  price: number;
  @Column()
  location: string;
  @Column()
  startTime: Date;
  @Column()
  endTime: Date;
  @Column()
  isPublished: boolean;
  @ManyToOne(() => Category)
  category: Category;
  @ManyToOne(() => User)
  user: User;
}
