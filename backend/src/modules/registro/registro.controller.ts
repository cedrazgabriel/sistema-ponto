import { Controller, Param, Post } from '@nestjs/common';
import { RegistroService } from './registro.service';

@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post(':id')
  baterPonto(@Param('id') id: number) {
    return this.registroService.baterPonto(+id);
  }
}
