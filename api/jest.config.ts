import { compilerOptions } from './tsconfig.json';

import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  collectCoverageFrom: ['src/application/**/useCases/**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  maxConcurrency: 3,
  maxWorkers: '50%',
  clearMocks: true,
  bail: true,
  setupFiles: ['dotenv/config'],
};

export default config;
