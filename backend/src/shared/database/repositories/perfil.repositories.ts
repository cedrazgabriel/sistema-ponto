import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PerfilRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPerfilDto: Prisma.PerfilCreateArgs) {
    return this.prismaService.perfil.create(createPerfilDto);
  }

  findUnique(findUniqueDto: Prisma.PerfilFindUniqueArgs) {
    return this.prismaService.perfil.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.PerfilFindManyArgs) {
    return this.prismaService.perfil.findMany(findManyDto);
  }

  update(updateDto: Prisma.PerfilUpdateArgs) {
    return this.prismaService.perfil.update(updateDto);
  }

  delete(deleteDto: Prisma.PerfilDeleteArgs) {
    return this.prismaService.perfil.delete(deleteDto);
  }
}
