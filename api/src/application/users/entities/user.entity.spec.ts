import { generateDefaultUser } from '../utils/generate-default-user.util';

describe('User entity', () => {
  it('should be able to create a user', () => {
    const user = generateDefaultUser();

    expect(user.id).not.toBeNull();
    expect(user.is_active).toBe(true);
  });
});
