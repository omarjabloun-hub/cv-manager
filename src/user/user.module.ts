import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from "../cv/cv.resolver";

@Module({
  controllers: [UserController],
  providers: [UserService, UsersResolver],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
