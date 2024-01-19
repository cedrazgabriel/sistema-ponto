import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';
import { UsersRepository } from 'src/shared/database/repositories/user.repositories';
import { PerfilService } from '../perfil/perfil.service';
import { UserService } from '../user/user.service';
import { SignUpDto } from './dto/signup';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private perfilService: PerfilService,
    private jwtService: JwtService,
    private usersRepo: UsersRepository,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (user?.senha != password) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const perfil = await this.perfilService.findOne(user.perfilId);

    const payload = {
      sub: user.id,
      username: user.username,
      role: perfil.nome,
    };

    return { acess_token: await this.jwtService.signAsync(payload) };
  }

  async signUp(signupDto: SignUpDto) {
    const { username, password, email, ativo, descricao, perfilId } = signupDto;

    const emailExists = await this.usersService.findByEmail(email);
    const usernameExists = await this.usersService.findByUsername(username);
    const perfilExists = await this.perfilService.findOne(perfilId);

    if (emailExists) {
      throw new ConflictException('Email já cadastrado');
    }

    if (usernameExists) {
      throw new ConflictException('Username já cadastrado');
    }

    if (!perfilExists) {
      throw new BadRequestException('Perfil não existe');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.usersRepo.create({
      data: {
        username,
        senha: hashedPassword,
        email,
        ativo,
        descricao,
        perfilId,
      },
    });

    const payload = {
      sub: user.id,
      username: user.username,
      role: perfilExists.nome,
    };

    return { acess_token: await this.jwtService.signAsync(payload) };
  }
}
