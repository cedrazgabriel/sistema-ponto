import { PartialType } from '@nestjs/swagger';
import { CreateJustificativaDto } from './create-justificativa.dto';

export class UpdateJustificativaDto extends PartialType(CreateJustificativaDto) {}
