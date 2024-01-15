import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RegistroHoraRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRegistroHora: Prisma.RegistroHoraCreateArgs) {
    return this.prismaService.registroHora.create(createRegistroHora);
  }

  findUnique(findUniqueDto: Prisma.RegistroHoraFindUniqueArgs) {
    return this.prismaService.registroHora.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.RegistroHoraFindManyArgs) {
    return this.prismaService.registroHora.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.RegistroHoraFindFirstArgs) {
    return this.prismaService.registroHora.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.RegistroHoraUpdateArgs) {
    return this.prismaService.registroHora.update(updateDto);
  }

  delete(deleteDto: Prisma.RegistroHoraDeleteArgs) {
    return this.prismaService.registroHora.delete(deleteDto);
  }
}
