import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMotivoDto {
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
