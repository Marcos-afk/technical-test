import { UserEntity } from '../entities/user.entity';

export const generateDefaultUser = () => {
  const user = new UserEntity();
  Object.assign(user, {
    name: 'John Doe',
    password: '12345678',
    email: 'johndoe@email.com',
    cell_phone: '+5522980840394',
    is_active: true,
    created_at: new Date(),
    updated_at: new Date(),
  });

  return user;
};
