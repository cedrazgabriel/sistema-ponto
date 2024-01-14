import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MotivoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMotivoDto: Prisma.MotivoCreateArgs) {
    return this.prismaService.motivo.create(createMotivoDto);
  }

  findUnique(findUniqueDto: Prisma.MotivoFindUniqueArgs) {
    return this.prismaService.motivo.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.MotivoFindManyArgs) {
    return this.prismaService.motivo.findMany(findManyDto);
  }

  update(updateDto: Prisma.MotivoUpdateArgs) {
    return this.prismaService.motivo.update(updateDto);
  }

  delete(deleteDto: Prisma.MotivoDeleteArgs) {
    return this.prismaService.motivo.delete(deleteDto);
  }
}
