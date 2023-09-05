import { UsersRepositoryInMemory } from '@application/users/in-memory/users.repository-in-memory';
import { UnauthorizedError } from '@common/errors/types/unauthorized-request-error';
import { AuthService } from '@infra/auth/auth.service';
import { FakeHashProvider } from '@infra/providers/hash/fake-hash.provider';

import { AuthenticateUserUseCase } from './authenticate-user.useCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let hashProvider: FakeHashProvider;
let authService: AuthService;

describe('Authenticate user use case', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new FakeHashProvider();
    authService = new AuthService(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
      hashProvider,
      authService,
    );
  });

  it('should be able to create a new session of user', async () => {
    const createdUser = await usersRepositoryInMemory.signUp({
      name: 'Marcos André',
      email: 'marcosteste123@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    Object.assign(createdUser, {
      is_active: true,
    });

    await usersRepositoryInMemory.save(createdUser);

    const auth = await authenticateUserUseCase.execute({
      email: 'marcosteste123@gmail.com',
      password: '12345678',
    });

    expect(auth).toHaveProperty('token');
    expect(auth).toHaveProperty('user');
  });

  it('should not be able to create a new session of user, blocked user', async () => {
    const createdUser = await usersRepositoryInMemory.signUp({
      name: 'Marcos André',
      email: 'marcosteste123@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    Object.assign(createdUser, {
      is_active: false,
    });

    await usersRepositoryInMemory.save(createdUser);

    expect(
      authenticateUserUseCase.execute({
        email: 'marcosteste123@gmail.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it('should be able to create a new session of user, invalid password', async () => {
    const createdUser = await usersRepositoryInMemory.signUp({
      name: 'Marcos André',
      email: 'marcosteste123@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    Object.assign(createdUser, {
      is_active: true,
    });

    await usersRepositoryInMemory.save(createdUser);

    expect(
      authenticateUserUseCase.execute({
        email: 'marcosteste123@gmail.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it('should be able to create a new session of user, invalid email', async () => {
    expect(
      authenticateUserUseCase.execute({
        email: 'marcosteste123@gmail.com',
        password: '123456789',
      }),
    ).rejects.toBeInstanceOf(UnauthorizedError);
  });
});
