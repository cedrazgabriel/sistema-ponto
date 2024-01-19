import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { MotivoModule } from './modules/motivo/motivo.module';
import { NotificationModule } from './modules/notification/notification.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { RegistroModule } from './modules/registro/registro.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    AuthModule,
    MotivoModule,
    PerfilModule,
    RegistroModule,
    NotificationModule,
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
