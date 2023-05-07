import { Skill } from '../../skill/entities/skill.entity';
import { User } from '../../user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from "@nestjs/graphql";
@Entity()
@ObjectType()
export class Cv {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'id of the user' })
  id: number;

  @Column()
  @Field(() => String, { description: 'name of the user' })
  name: string;

  @Column()
  @Field(() => String, { description: 'firstname of the user' })
  firstname: string;

  @Column()
  @Field(() => Int, { description: 'age of the user' })
  age: number;

  @Field(() => String, { description: 'cin of the user' })
  @Column()
  cin: string;

  @Column()
  @Field(() => String, { description: 'job of the user' })
  job: string;

  @Column()
  @Field(() => String, { description: 'path of the user' })
  path: string;

  @ManyToMany(() => Skill, (skill) => skill.cvs)
  @JoinTable()
  skills: Skill[];

  @ManyToOne(() => User, (user) => user.cvs)
  user: User;
}
