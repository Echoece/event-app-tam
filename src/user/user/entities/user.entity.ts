import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
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
