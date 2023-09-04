import { UserEntity } from '@application/users/entities/user.entity';

import { instanceToInstance } from 'class-transformer';

export class UserMapper {
  static toDto({
    id,
    name,
    email,
    is_active,
    cell_phone,
    created_at,
    updated_at,
  }: UserEntity) {
    const user = instanceToInstance({
      id,
      name,
      is_active,
      cell_phone,
      email,
      created_at,
      updated_at,
    });

    return user;
  }
}
