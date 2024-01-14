import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { MotivoModule } from './modules/motivo/motivo.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, MotivoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
