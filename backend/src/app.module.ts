import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { MotivoModule } from './modules/motivo/motivo.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { PerfilModule } from './modules/perfil/perfil.module';
import { RegistroModule } from './modules/registro/registro.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AuthModule,
    MotivoModule,
    PerfilModule,
    RegistroModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
