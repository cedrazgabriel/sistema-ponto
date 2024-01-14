import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';
import { MotivoRepository } from './repositories/motivo.repositories';
import { PerfilRepository } from './repositories/perfil.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MotivoRepository,
    PerfilRepository,
  ],
  exports: [UsersRepository, MotivoRepository, PerfilRepository],
})
export class DatabaseModule {}
