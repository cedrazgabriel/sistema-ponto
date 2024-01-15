import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';
import { MotivoRepository } from './repositories/motivo.repositories';
import { PerfilRepository } from './repositories/perfil.repositories';
import { RegistroHoraRepository } from './repositories/registro-hora.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MotivoRepository,
    PerfilRepository,
    RegistroHoraRepository,
  ],
  exports: [
    UsersRepository,
    MotivoRepository,
    PerfilRepository,
    RegistroHoraRepository,
  ],
})
export class DatabaseModule {}
