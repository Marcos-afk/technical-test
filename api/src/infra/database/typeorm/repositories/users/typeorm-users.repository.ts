import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDTO } from '@application/users/dtos/create-user.dto';
import { UserEntity } from '@application/users/entities/user.entity';
import { UsersRepositoryProps } from '@application/users/repositories/users.repository-props';

import { Repository } from 'typeorm';

@Injectable()
export class TypeormUsersRepository implements UsersRepositoryProps {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findUserByCellPhone(cell_phone: string): Promise<UserEntity> {
    return await this.usersRepository.findOne({ where: { cell_phone } });
  }

  async findUserById(id: string): Promise<UserEntity | null> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async signUp({
    name,
    email,
    password,
    cell_phone,
  }: CreateUserDTO): Promise<UserEntity> {
    const createdUser = this.usersRepository.create({
      name,
      email,
      password,
      cell_phone,
    });
    return await this.usersRepository.save(createdUser);
  }

  async save(user: UserEntity): Promise<UserEntity> {
    return await this.usersRepository.save(user);
  }
}
