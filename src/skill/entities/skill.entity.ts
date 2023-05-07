import { Cv } from '../../cv/entities/cv.entity';
import { Column, Entity,  ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'id of the user' })
  id: number;
  @Column()
  @Field(() => String, { description: 'name of the user' })
  designation: string;
  @ManyToMany(() => Cv, (cv) => cv.skills)
  cvs: Cv[];
}
