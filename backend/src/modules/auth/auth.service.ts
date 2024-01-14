import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PerfilService } from '../perfil/perfil.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private perfilService: PerfilService,
    private jwtService: JwtService,
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
}
