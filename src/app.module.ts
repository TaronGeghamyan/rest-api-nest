import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './typeorm.config';
import { DynamicCrudModule } from './dynamic-crud/dynamic-crud.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    DynamicCrudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
