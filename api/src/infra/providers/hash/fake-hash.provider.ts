import { Injectable } from '@nestjs/common';

import { HashProviderProps } from './types/hash.provider-props';

@Injectable()
export class FakeHashProvider implements HashProviderProps {
  async hash(password: string): Promise<string> {
    return password;
  }

  async compare(password: string, password_compared: string): Promise<boolean> {
    return password === password_compared;
  }
}
