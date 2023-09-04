import { Module } from '@nestjs/common';

import { SignUpUseCase } from '@application/users/useCases/signUp/sign-up.useCase';
import { ProvidersModule } from '@infra/providers/providers.module';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DatabaseModule, ProvidersModule],
  controllers: [UsersController],
  providers: [SignUpUseCase],
  exports: [],
})
export class HttpModule {}
