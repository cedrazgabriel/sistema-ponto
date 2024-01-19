import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateJustificativaDto {
  @IsNumber()
  @IsNotEmpty()
  idRegistroHora: number;

  @IsNumber()
  @IsNotEmpty()
  idMotivo: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
