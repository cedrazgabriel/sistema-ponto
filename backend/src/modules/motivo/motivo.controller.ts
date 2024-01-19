import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMotivoDto } from './dto/create-motivo.dto';
import { UpdateMotivoDto } from './dto/update-motivo.dto';
import { MotivoService } from './motivo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('motivo')
@Controller('motivo')
export class MotivoController {
  constructor(private readonly motivoService: MotivoService) {}

  @Post()
  create(@Body() createMotivoDto: CreateMotivoDto) {
    return this.motivoService.create(createMotivoDto);
  }

  @Get()
  findAll() {
    return this.motivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotivoDto: UpdateMotivoDto) {
    return this.motivoService.update(+id, updateMotivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motivoService.remove(+id);
  }
}
