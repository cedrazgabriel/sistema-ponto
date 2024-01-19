import { BadRequestException, Injectable } from '@nestjs/common';
import { JustificativaRepository } from 'src/shared/database/repositories/justificativa.repositories';
import { MotivoRepository } from 'src/shared/database/repositories/motivo.repositories';
import { RegistroHoraRepository } from 'src/shared/database/repositories/registro-hora.repositories';
import { CreateJustificativaDto } from './dto/create-justificativa.dto';
import { UpdateJustificativaDto } from './dto/update-justificativa.dto';

@Injectable()
export class JustificativaService {
  constructor(
    private readonly justificativaRepo: JustificativaRepository,
    private readonly registroHoraRepo: RegistroHoraRepository,
    private readonly motivoRepo: MotivoRepository,
  ) {}
  create(createJustificativaDto: CreateJustificativaDto) {
    const registroHora = this.registroHoraRepo.findUnique({
      where: { id: createJustificativaDto.idRegistroHora },
    });

    if (!registroHora) {
      throw new BadRequestException('Registro de hora não encontrado');
    }

    const motivo = this.motivoRepo.findUnique({
      where: { id: createJustificativaDto.idMotivo },
    });

    if (!motivo) {
      throw new BadRequestException('Motivo não encontrado');
    }

    const { idRegistroHora, idMotivo, descricao } = createJustificativaDto;

    return this.justificativaRepo.create({
      data: {
        idRegistroHora,
        idMotivo,
        descricao,
      },
    });
  }

  findAll() {
    return this.justificativaRepo.findMany({});
  }

  findOne(id: number) {
    return this.justificativaRepo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateJustificativaDto: UpdateJustificativaDto) {
    const justificativa = this.justificativaRepo.findUnique({
      where: { id },
    });

    if (!justificativa) {
      throw new BadRequestException('Justificativa não encontrada');
    }

    const motivo = this.motivoRepo.findUnique({
      where: { id: updateJustificativaDto.idMotivo },
    });

    if (!motivo) {
      throw new BadRequestException('Motivo não encontrado');
    }

    const registroHora = this.registroHoraRepo.findUnique({
      where: { id: updateJustificativaDto.idRegistroHora },
    });

    if (!registroHora) {
      throw new BadRequestException('Registro de hora não encontrado');
    }

    const { idRegistroHora, idMotivo, descricao } = updateJustificativaDto;

    return this.justificativaRepo.update({
      where: { id },
      data: {
        idRegistroHora,
        idMotivo,
        descricao,
      },
    });
  }

  remove(id: number) {
    return this.justificativaRepo.delete({
      where: { id },
    });
  }
}
