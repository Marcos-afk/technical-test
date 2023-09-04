import { UsersRepositoryInMemory } from '@application/users/in-memory/users.repository-in-memory';
import { BadRequestError } from '@common/errors/types/bad-request-error';
import { FakeHashProvider } from '@infra/providers/hash/fake-hash.provider';

import { SignUpUseCase } from './sign-up.useCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProvider: FakeHashProvider;
let signUpUseCase: SignUpUseCase;

describe('Create user use case', () => {
  beforeEach(async () => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new FakeHashProvider();

    signUpUseCase = new SignUpUseCase(usersRepositoryInMemory, hashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await signUpUseCase.execute({
      name: 'Marcos André',
      email: 'marcosteste123@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    expect(user).toHaveProperty('id');
    expect(user.id).not.toBeNull();
  });

  it('should not be able to create a new user, email already exists', async () => {
    await usersRepositoryInMemory.signUp({
      name: 'Marcos André',
      email: 'marcosteste123@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    await expect(
      signUpUseCase.execute({
        name: 'Marcos André',
        email: 'marcosteste123@gmail.com',
        password: '12345678',
        cell_phone: '+5522980840394',
      }),
    ).rejects.toThrow(BadRequestError);
  });

  it('should not be able to create a new user, cell phone already exists', async () => {
    await usersRepositoryInMemory.signUp({
      name: 'Marcos André',
      email: 'marcosteste1234@gmail.com',
      password: '12345678',
      cell_phone: '+5522980840394',
    });

    await expect(
      signUpUseCase.execute({
        name: 'Marcos André',
        email: 'marcosteste123@gmail.com',
        password: '12345678',
        cell_phone: '+5522980840394',
      }),
    ).rejects.toThrow(BadRequestError);
  });
});
