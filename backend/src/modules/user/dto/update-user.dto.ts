import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  username?: string;

  @IsString()
  senha?: string;

  @IsEmail()
  email?: string;

  @IsBoolean()
  ativo?: boolean;

  @IsString()
  descricao?: string;

  @IsNumber()
  perfilId?: number;
}
