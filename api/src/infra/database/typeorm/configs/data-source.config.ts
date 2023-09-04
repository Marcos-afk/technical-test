import 'dotenv/config';

import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: ['dist/src/application/**/*.entity{.ts,.js}'],
  subscribers: ['dist/src/application/**/*.subscriber{.ts,.js}'],
  migrations: ['dist/src/infra/database/typeorm/migrations/*{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'typeorm_migrations',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
