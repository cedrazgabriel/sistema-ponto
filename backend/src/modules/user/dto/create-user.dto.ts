import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  perfilId: number;
}
