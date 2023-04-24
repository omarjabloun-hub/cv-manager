import { Cv } from '../../cv/entities/cv.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  userName: string;
  @OneToMany(() => Cv, (cv) => cv.user)
  cvs: Cv[];
}
