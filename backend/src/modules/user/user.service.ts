import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';

@Injectable()
export class UserService {
  constructor(private readonly usersRepo: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepo.create({
      data: createUserDto,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
