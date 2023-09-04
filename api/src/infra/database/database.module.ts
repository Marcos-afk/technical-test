import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '@application/users/entities/user.entity';
import { UsersRepositoryProps } from '@application/users/repositories/users.repository-props';

import { dataSourceOptions } from './typeorm/configs/data-source.config';
import { TypeormUsersRepository } from './typeorm/repositories/users/typeorm-users.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    {
      provide: UsersRepositoryProps,
      useClass: TypeormUsersRepository,
    },
  ],
  exports: [UsersRepositoryProps],
})
export class DatabaseModule {}
