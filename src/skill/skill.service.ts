import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill) private readonly skillRepo: Repository<Skill>, // private cvsService : CvsService
  ) {}
  create(createSkillDto: CreateSkillDto) {
    return this.skillRepo.save(createSkillDto);
  }
  save(skills: Skill[]) {
    return this.skillRepo.save(skills);
  }

  findAll() {
    return this.skillRepo.find();
  }

  findOne(id: number) {
    return this.skillRepo.findOne({ where: { id } });
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    console.log(updateSkillDto);
    return this.skillRepo.update(id, updateSkillDto);
  }

  remove(id: number) {
    return this.skillRepo.delete(id);
  }
}
