import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DynamicCrudService } from './dynamic-crud.service';
import { DynamicCrud } from './dynamic-crud.interface';

@Controller('dynamic-crud')
export class DynamicCrudController {
  constructor(private readonly dynamicCrudService: DynamicCrudService) {}

  @Get(':entityName')
  async findAll(@Param('entityName') entityName: string) {
    return await this.dynamicCrudService.findAll(entityName);
  }

  @Get(':entityName/:id')
  async findOne(
    @Param('entityName') entityName: string,
    @Param('id') id: number,
  ) {
    return await this.dynamicCrudService.findOne(entityName, id);
  }

  @Post(':entityName')
  async create(
    @Param('entityName') entityName: string,
    @Body() data: DynamicCrud,
  ) {
    return await this.dynamicCrudService.create(entityName, data);
  }

  @Post(':entityName/import')
  async import(
    @Param('entityName') entityName: string,
    @Body() data: DynamicCrud,
  ) {
    return await this.dynamicCrudService.import(entityName, data);
  }

  @Put(':entityName/:id')
  async update(
    @Param('entityName') entityName: string,
    @Param('id') id: number,
    @Body() data: DynamicCrud,
  ) {
    return await this.dynamicCrudService.update(entityName, id, data);
  }

  @Delete(':entityName/:id')
  async delete(
    @Param('entityName') entityName: string,
    @Param('id') id: number,
  ) {
    return await this.dynamicCrudService.delete(entityName, id);
  }
}
