import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();
type DatabaseType =
  | 'mysql'
  | 'mariadb'
  | 'postgres'
  | 'sqlite'
  | 'cockroachdb'
  | 'mssql'
  | 'sap'
  | 'oracle'
  | 'cordova'
  | 'nativescript'
  | 'react-native'
  | 'mongodb'
  | 'aurora-mysql';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.TYPEORM_CONNECTION as DatabaseType,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  schema: process.env.TYPEORM_SCHEME,
  autoLoadEntities: Boolean(process.env.TYPEORM_AUTO_LOAD_ENTITIES),
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
  logging: Boolean(process.env.TYPEORM_LOGGING),
  // entities: [__dirname + '/../**/*.entity.{ts,js}'],
};
