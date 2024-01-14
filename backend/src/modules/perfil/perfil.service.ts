import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { PerfilRepository } from 'src/shared/database/repositories/perfil.repositories';

@Injectable()
export class PerfilService {
  constructor(private readonly perfilRepo: PerfilRepository) {}
  create(createPerfilDto: CreatePerfilDto) {
    return this.perfilRepo.create({
      data: createPerfilDto,
    });
  }

  findAll() {
    return this.perfilRepo.findMany({});
  }

  findOne(id: number) {
    return this.perfilRepo.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {
    return this.perfilRepo.update({
      where: { id },
      data: updatePerfilDto,
    });
  }

  remove(id: number) {
    return this.perfilRepo.delete({
      where: { id },
    });
  }
}
