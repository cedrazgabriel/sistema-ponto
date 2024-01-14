import { Injectable } from '@nestjs/common';
import { CreateMotivoDto } from './dto/create-motivo.dto';
import { UpdateMotivoDto } from './dto/update-motivo.dto';
import { MotivoRepository } from 'src/shared/database/repositories/motivo.repositories';

@Injectable()
export class MotivoService {
  constructor(private readonly motivoRepo: MotivoRepository) {}

  create(createMotivoDto: CreateMotivoDto) {
    return this.motivoRepo.create({
      data: createMotivoDto,
    });
  }

  findAll() {
    return this.motivoRepo.findMany({});
  }

  findOne(id: number) {
    return this.motivoRepo.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMotivoDto: UpdateMotivoDto) {
    return this.motivoRepo.update({
      where: {
        id,
      },
      data: updateMotivoDto,
    });
  }

  remove(id: number) {
    return this.motivoRepo.delete({
      where: {
        id,
      },
    });
  }
}
