import { Skill } from '../../skill/entities/skill.entity';
import { User } from '../../user/entities/user.entity';
import {
  Column,
  Entity, JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Field, ID, Int, ObjectType, Parent, ResolveField } from "@nestjs/graphql";
@Entity()
@ObjectType()
export class Cv {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'id of the cv' })
  id: number;
  @Column()
  @Field(() => String, { description: 'name in the cv' })
  name: string;
  @Column()
  @Field(() => String, { description: 'firstname in the cv' })
  firstname: string;
  @Column()
  @Field(() => Int, { description: 'age in the cv' })
  age: number;
  @Field(() => String, { description: 'cin in the cv' })
  @Column()
  cin: string;
  @Column()
  @Field(() => String, { description: 'job in the cv' })
  job: string;
  @Column()
  @Field(() => String, { description: 'path of the user' })
  path: string;
  @ManyToMany(() => Skill, (skill) => skill.cvs,  { eager: true })
  @JoinTable()
  @Field( type => [Skill], { description: 'skills of the user' } ,)
  skills: Skill[];
  @ManyToOne(() => User, (user) => user.cvs)
  @Field( type => User, { description: 'owner of the cv' })
  @ManyToOne( type => User, user => user.cvs , { eager: true})
  @JoinColumn( { name : "userId"})
  user: User;

}
