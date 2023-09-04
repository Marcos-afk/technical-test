import { Module } from '@nestjs/common';

import { SignUpUseCase } from '@application/users/useCases/signUp/sign-up.useCase';
import { ProvidersModule } from '@infra/providers/providers.module';
import { StripeService } from '@infra/stripe/stripe.service';

import { DatabaseModule } from '../database/database.module';
import { StripeController } from './controllers/stripe/stripe.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [DatabaseModule, ProvidersModule],
  controllers: [UsersController, StripeController],
  providers: [SignUpUseCase, StripeService],
  exports: [],
})
export class HttpModule {}
