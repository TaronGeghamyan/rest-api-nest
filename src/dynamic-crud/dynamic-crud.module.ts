import { Module } from '@nestjs/common';
import { DynamicCrudController } from './dynamic-crud.controller';
import { DynamicCrudService } from './dynamic-crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from './entities/states.entity';
import { History } from './entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([States, History, DynamicCrudService])],
  controllers: [DynamicCrudController],
  providers: [DynamicCrudService],
})
export class DynamicCrudModule {}
