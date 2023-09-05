import { Module } from '@nestjs/common';

import { AuthenticateUserUseCase } from '@application/users/useCases/authenticateUser/authenticate-user.useCase';
import { SignUpUseCase } from '@application/users/useCases/signUp/sign-up.useCase';
import { AuthModule } from '@infra/auth/auth.module';
import { ProvidersModule } from '@infra/providers/providers.module';
import { StripeService } from '@infra/stripe/stripe.service';

import { DatabaseModule } from '../database/database.module';
import { StripeController } from './controllers/stripe/stripe.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DatabaseModule, ProvidersModule, AuthModule],
  controllers: [UsersController, StripeController],
  providers: [SignUpUseCase, AuthenticateUserUseCase, StripeService],
  exports: [],
})
export class HttpModule {}
