import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  randEmail,
  randFirstName,
  randJobArea,
  randJobTitle,
  randNumber,
  randPassword,
  randSkill,
  randUserName,
} from '@ngneat/falso';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Cv } from '../cv/entities/cv.entity';
import { Skill } from '../skill/entities/skill.entity';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CvService } from '../cv/cv.service';
import { SkillService } from '../skill/skill.service';
import { UserService } from '../user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userRepository = app.get(UserService);
  const skillRepository = app.get(SkillService);
  const cvRepository = app.get(CvService);
  const userCount = 40;
  const users = new Array<User>();
  for (let i = 0; i < userCount; i++) {
    const user = new User();
    user.userName = randUserName();
    user.email = randEmail();
    user.password = randPassword();
    users.push(user);
  }
  await userRepository.save(users);
  const skills = new Array<Skill>();

  for (let j = 0; j < 100; j++) {
    const skill = new Skill();
    skill.designation = randSkill();
    skills.push(skill);
  }

  await skillRepository.save(skills);
  const cvs = new Array<Cv>();
  const skillCount = skills.length;
  const userCount1 = users.length;
  for (let i = 0; i < userCount1; i++) {
    const numCvs = randNumber({ min: 1, max: 3 });
    for (let j = 0; j < numCvs; j++) {
      const cv = new Cv();
      const numSkills = randNumber({ min: 1, max: 10 });
      for (let k = 0; k < numSkills; k++) {
        const skillIndex = randNumber({ min: 0, max: skillCount - 1 });
        cv.skills = [skills[skillIndex]];
      }
      cv.name = randUserName();
      cv.firstname = randFirstName();
      cv.age = randNumber({ min: 18, max: 60 });
      cv.cin =
        randNumber({ min: 0, max: 1 }).toString() +
        randNumber({ min: 1000000, max: 9999999 }).toString();
      cv.job = randJobTitle();
      cv.path = randJobArea();
      cv.user = users[i];
      cvs.push(cv);
    }
  }
  await cvRepository.save(cvs);
}

bootstrap();
