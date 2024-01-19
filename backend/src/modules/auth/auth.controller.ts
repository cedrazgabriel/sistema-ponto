import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { SignUpDto } from './dto/signup';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: SigninDto) {
    return this.authService.signIn(loginDto.username, loginDto.senha);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() loginDto: SignUpDto) {
    return this.authService.signUp(loginDto);
  }
}
