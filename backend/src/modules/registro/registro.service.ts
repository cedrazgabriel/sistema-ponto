import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistroHoraRepository } from 'src/shared/database/repositories/registro-hora.repositories';
import { RegistroHora } from '@prisma/client';

@Injectable()
export class RegistroService {
  constructor(private readonly registroHoraRepo: RegistroHoraRepository) {}

  async baterPonto(userId: number) {
    const registroHoraHoje = await this.registroHoraRepo.findFirst({
      where: {
        userId: userId,
        dataReferencia: new Date(),
      },
    });

    //Se não existe registro de hora para o dia de hoje, cria um novo
    if (registroHoraHoje === null) {
      return this.registroHoraRepo.create({
        data: {
          userId: userId,
          horaInicio: new Date(),
        },
      });
    }

    const proximoHorarioPreencher =
      this.verificaProximoCampoPontoPreencher(registroHoraHoje);

    switch (proximoHorarioPreencher) {
      case 'horaIntervalo':
        return this.registroHoraRepo.update({
          where: {
            id: registroHoraHoje.id,
          },
          data: {
            horaIntervalo: new Date(),
          },
        });
      case 'horaRetorno':
        return this.registroHoraRepo.update({
          where: {
            id: registroHoraHoje.id,
          },
          data: {
            horaRetorno: new Date(),
          },
        });
      case 'horaFim':
        return this.registroHoraRepo.update({
          where: {
            id: registroHoraHoje.id,
          },
          data: {
            horaFim: new Date(),
          },
        });
      default:
        throw new BadRequestException('Ponto já preenchido pro dia de hoje');
    }
  }

  private verificaProximoCampoPontoPreencher(
    registroHoraHoje: RegistroHora,
  ): string {
    const tiposHorarios = [
      'horaInicio',
      'horaIntervalo',
      'horaRetorno',
      'horaFim',
    ];

    for (const horario of tiposHorarios) {
      if (registroHoraHoje[horario] === null) {
        return horario;
      }
    }
  }
}
