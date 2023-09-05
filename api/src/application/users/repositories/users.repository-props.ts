import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UsersRepositoryProps {
  abstract findUserByEmail(email: string): Promise<UserEntity | null>;
  abstract findUserById(id: string): Promise<UserEntity | null>;
  abstract findUserByCellPhone(cell_phone: string): Promise<UserEntity | null>;
  abstract signUp(createUserDTO: CreateUserDTO): Promise<UserEntity>;
  abstract save(user: UserEntity): Promise<UserEntity>;
}
