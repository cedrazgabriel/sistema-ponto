import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateJustificativaDto } from './dto/create-justificativa.dto';
import { UpdateJustificativaDto } from './dto/update-justificativa.dto';
import { JustificativaService } from './justificativa.service';

@Controller('justificativa')
export class JustificativaController {
  constructor(private readonly justificativaService: JustificativaService) {}

  @Post()
  create(@Body() createJustificativaDto: CreateJustificativaDto) {
    return this.justificativaService.create(createJustificativaDto);
  }

  @Get()
  findAll() {
    return this.justificativaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.justificativaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJustificativaDto: UpdateJustificativaDto,
  ) {
    return this.justificativaService.update(+id, updateJustificativaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.justificativaService.remove(+id);
  }
}
