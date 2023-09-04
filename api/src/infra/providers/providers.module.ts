import { Module } from '@nestjs/common';

import { DateProvider } from './date/date.provider';
import { DateProviderProps } from './date/types/date.provider-props';
import { HashProvider } from './hash/hash.provider';
import { HashProviderProps } from './hash/types/hash.provider-props';

@Module({
  providers: [
    {
      provide: HashProviderProps,
      useClass: HashProvider,
    },
    {
      provide: DateProviderProps,
      useClass: DateProvider,
    },
  ],
  exports: [HashProviderProps, DateProviderProps],
})
export class ProvidersModule {}
