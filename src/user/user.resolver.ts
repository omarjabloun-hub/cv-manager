import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";


@Resolver(() => User)
export class SkillsResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('skill', { type: () => String }) userId: number) {
    return this.userService.findOne(userId);
  }

}