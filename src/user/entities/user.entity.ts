import { Cv } from '../../cv/entities/cv.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'id of the user' })
  id: number;
  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Column()
  @Field(() => String, { description: 'password of the user' })
  password: string;
  @Column()
  @Field(() => String, { description: 'username of the user' })
  userName: string;
  @OneToMany(() => Cv, (cv) => cv.user)
  @Field( type => [Cv], { description: 'cvs of the user' })
  cvs: Cv[];
}
