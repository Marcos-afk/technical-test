import { Injectable } from '@nestjs/common';

import { UsersRepositoryProps } from '@application/users/repositories/users.repository-props';
import { UnauthorizedError } from '@common/errors/types/unauthorized-request-error';

import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepositoryProps) {}

  public async createAccessToken(userId: string) {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser(userId: string) {
    const user = await this.usersRepository.findUserById(userId);
    if (!user) {
      throw new UnauthorizedError(
        'Código de identificação de usuário inválido',
      );
    }

    return user;
  }
}
