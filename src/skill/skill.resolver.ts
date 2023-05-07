import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Skill } from './entities/skill.entity';
import { CreateSkillDto } from "./dto/create-skill.dto";
import { SkillService } from "./skill.service";

@Resolver(() => Skill)
export class SkillsResolver {
  constructor(private readonly skillService: SkillService) {}

  /*@Mutation(() => Skill)
  createSkill(@Args('createSkillInput') createUserInput : CreateSkillDto ) {
    return this.skillService.create(createUserInput);
  }*/

  @Query(() => [Skill], { name: 'skills' })
  findAll() {
    return this.skillService.findAll();
  }

  @Query( () => String , {name : 'testing'})
  testing(){
    return "testing OK";
  }

  @Query(() => Skill, { name: 'skill' })
  findOne(@Args('skill', { type: () => String }) skillId: number) {
    return this.skillService.findOne(skillId);
  }

 /* @Mutation(() => Skill)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.skillService.update(updateUserInput.userId, updateUserInput);
  }

  @Mutation(() => Skill)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.skillService.remove(userId);
  }*/
}