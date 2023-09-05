import { UserEntity } from '../entities/user.entity';
import { generateDefaultUser } from './generate-default-user.util';

export const generateDefaultSession = () => {
  return {
    user: generateDefaultUser(),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3Y2JkOWE3Ny0wY2MzLTQyMzgtYmEwNi0xOWI0Yzk0MWIxMzgiLCJpYXQiOjE2OTM5MDE1NTUsImV4cCI6MTY5Mzk4Nzk1NX0.Whcut2frVs9zqcrfdar2mknafX3IIDAkhQUozFf8GUw',
  };
};

export interface SessionProps {
  user: UserEntity;
  token: string;
}
