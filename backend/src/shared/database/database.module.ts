import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JustificativaRepository } from './repositories/justificativa.repositories';
import { MotivoRepository } from './repositories/motivo.repositories';
import { PerfilRepository } from './repositories/perfil.repositories';
import { RegistroHoraRepository } from './repositories/registro-hora.repositories';
import { UsersRepository } from './repositories/user.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MotivoRepository,
    PerfilRepository,
    RegistroHoraRepository,
    JustificativaRepository,
  ],
  exports: [
    UsersRepository,
    MotivoRepository,
    PerfilRepository,
    RegistroHoraRepository,
    JustificativaRepository,
  ],
})
export class DatabaseModule {}
