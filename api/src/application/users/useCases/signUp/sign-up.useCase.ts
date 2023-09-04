import { Injectable } from '@nestjs/common';

import { UserMapper } from '@application/users/mappers/user.mapper';
import { UsersRepositoryProps } from '@application/users/repositories/users.repository-props';
import { BadRequestError } from '@common/errors/types/bad-request-error';
import { HashProviderProps } from '@infra/providers/hash/types/hash.provider-props';

import { CreateUserDTO } from '../../dtos/create-user.dto';

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryProps,
    private readonly hashProvider: HashProviderProps,
  ) {}

  async execute({ name, email, password, cell_phone }: CreateUserDTO) {
    const isExistUserEmail = await this.usersRepository.findUserByEmail(email);

    if (isExistUserEmail) {
      throw new BadRequestError('Email já está sendo utilizado');
    }

    const isExistCellPhone =
      await this.usersRepository.findUserByCellPhone(cell_phone);
    if (isExistCellPhone) {
      throw new BadRequestError('Número de telefone já está sendo utilizado');
    }

    const hashPassword = await this.hashProvider.hash(password);

    const createdUser = await this.usersRepository.signUp({
      name,
      email,
      password: hashPassword,
      cell_phone,
    });

    return UserMapper.toDto(createdUser);
  }
}
