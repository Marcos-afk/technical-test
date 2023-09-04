import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { UsersRepositoryProps } from '../repositories/users.repository-props';

export class UsersRepositoryInMemory implements UsersRepositoryProps {
  private users: UserEntity[] = [];

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.email === email);
    return user ? user : null;
  }

  async findUserByCellPhone(cell_phone: string): Promise<UserEntity | null> {
    const user = this.users.find((u) => u.cell_phone === cell_phone);
    return user ? user : null;
  }

  async signUp({
    name,
    email,
    password,
    cell_phone,
  }: CreateUserDTO): Promise<UserEntity> {
    const user = new UserEntity();
    Object.assign(user, {
      name,
      email,
      password,
      cell_phone,
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
    return user;
  }

  async save(user: UserEntity): Promise<UserEntity> {
    const findIndex = this.users.findIndex((u) => u.id === user.id);
    this.users[findIndex] = user;
    return user;
  }
}
