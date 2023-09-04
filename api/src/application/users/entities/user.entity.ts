import { BaseEntity } from '@common/bases/entitiy/base.entity';

import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cell_phone: string;

  @Column()
  password: string;

  @Column({ type: 'boolean', default: true })
  is_active?: boolean;
}
