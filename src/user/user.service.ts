import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async find(id: number) {
    return await this.userRepo.findOne({ where: { id } });
  }

  async countUsers() {
    return await this.userRepo.count();
  }

  async findOne(body: CreateUserDto) {
    return await this.userRepo.findOne({ where: body });
  }
  async  findAll() {
    return await this.userRepo.find();
  }

  async update(id: number, body: UpdateUserDto) {
    return await this.userRepo.update(id, body);
  }
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
  async create(body: CreateUserDto): Promise<User> {
    const user = this.userRepo.create({
      ...body,
    });
    await this.userRepo.save(user);
    return user;
  }
  async save(users: User[]) {
    return await this.userRepo.save(users);
  }
}
