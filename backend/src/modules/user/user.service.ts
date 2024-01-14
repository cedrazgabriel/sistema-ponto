import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';
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
