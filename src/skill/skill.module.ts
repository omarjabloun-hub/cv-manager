import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { SkillsResolver } from "./skill.resolver";

@Module({
  controllers: [SkillController],
  providers: [SkillService, SkillsResolver],
  imports: [TypeOrmModule.forFeature([Skill])],
})
export class SkillModule {}
