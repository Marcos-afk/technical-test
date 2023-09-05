import { Injectable } from '@nestjs/common';

import { AuthenticateUserDTO } from '@application/users/dtos/authenticate-user.dto';
import { UserMapper } from '@application/users/mappers/user.mapper';
import { UsersRepositoryProps } from '@application/users/repositories/users.repository-props';
import { UnauthorizedError } from '@common/errors/types/unauthorized-request-error';
import { AuthService } from '@infra/auth/auth.service';
import { HashProviderProps } from '@infra/providers/hash/types/hash.provider-props';

@Injectable()
export class AuthenticateUserUseCase {
  constructor(
    private readonly userRepository: UsersRepositoryProps,
    private readonly hashProvider: HashProviderProps,
    private readonly authService: AuthService,
  ) {}

  public async execute({ email, password }: AuthenticateUserDTO) {
    const user = await this.userRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedError('Email e/ou senha inválido(s)');
    }

    if (!user.is_active) {
      throw new UnauthorizedError('Usuário bloqueado');
    }

    const confirmedPassword = await this.hashProvider.compare(
      password,
      user.password,
    );

    if (!confirmedPassword) {
      throw new UnauthorizedError('Email e/ou senha inválido(s)');
    }

    const token = await this.authService.createAccessToken(user.id);

    return { user: UserMapper.toDto(user), token };
  }
}
