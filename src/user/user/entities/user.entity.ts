import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: true,
    comment: 'Unique email for each user',
  })
  email: string;
  @Column()
  password: string;
  toJSON() {
    const { password, ...self } = this;
    return self;
  }
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  contactNumber: string;
  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
  @Column()
  imgURL: string;
}
