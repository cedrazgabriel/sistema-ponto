import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class JustificativaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createJustificativaDto: Prisma.JustificativaCreateArgs) {
    return this.prismaService.justificativa.create(createJustificativaDto);
  }

  findUnique(findUniqueDto: Prisma.JustificativaFindUniqueArgs) {
    return this.prismaService.justificativa.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.JustificativaFindManyArgs) {
    return this.prismaService.justificativa.findMany(findManyDto);
  }

  update(updateDto: Prisma.JustificativaUpdateArgs) {
    return this.prismaService.justificativa.update(updateDto);
  }

  delete(deleteDto: Prisma.JustificativaDeleteArgs) {
    return this.prismaService.justificativa.delete(deleteDto);
  }
}
