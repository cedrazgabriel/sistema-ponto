import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/user.repositories';
import { MotivoRepository } from './repositories/motivo.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, MotivoRepository],
  exports: [UsersRepository, MotivoRepository],
})
export class DatabaseModule {}
