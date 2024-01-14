import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePerfilDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
