import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepo: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepo.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.usersRepo.findMany({});
  }

  findOne(id: number) {
    return this.usersRepo.findUnique({
      where: {
        id,
      },
    });
  }

  findByUsername(username: string) {
    return this.usersRepo.findUnique({
      where: {
        username,
      },
    });
  }

  findByEmail(email: string) {
    return this.usersRepo.findUnique({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.usersRepo.delete({
      where: {
        id,
      },
    });
  }
}
