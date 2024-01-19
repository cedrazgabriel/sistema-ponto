import { Module } from '@nestjs/common';
import { JustificativaService } from './justificativa.service';
import { JustificativaController } from './justificativa.controller';

@Module({
  controllers: [JustificativaController],
  providers: [JustificativaService],
})
export class JustificativaModule {}
