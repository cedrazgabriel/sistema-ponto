import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegistroService } from './registro.service';

@ApiTags('registro')
@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post(':id')
  baterPonto(@Param('id') id: number) {
    return this.registroService.baterPonto(+id);
  }
}
