import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, FindOneOptions, MoreThan } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class DynamicCrudService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  private getEntityRepository(entityName: string) {
    return this.connection.getRepository(entityName);
  }

  async findOne(entityName: string, id: number): Promise<any> {
    const entityRepository = this.getEntityRepository(entityName);
    const entityMetadata = entityRepository.metadata;
    const relations = entityMetadata.relations.map(
      (relation) => relation.propertyName,
    );
    const options: FindOneOptions = {
      where: { id, status: MoreThan(0) },
      relations,
    };
    return await entityRepository.findOne(options);
  }

  async findAll(entityName: string): Promise<any[]> {
    const entityRepository = this.connection.getRepository(entityName);
    const entityMetadata = entityRepository.metadata;
    const relations = entityMetadata.relations.map(
      (relation) => relation.propertyName,
    );

    console.log(relations);

    return await this.getEntityRepository(entityName).find({
      where: {
        status: MoreThan(0),
      },
      order: {
        id: 'ASC',
      },
      relations,
    });
  }

  async create(entityName: string, data: any): Promise<any> {
    const entityRepository = this.getEntityRepository(entityName);
    const entity = entityRepository.create(data);
    const model = await entityRepository.save(entity);
    return await this.findOne(entityName, model['id']);
  }

  async import(entityName: string, data: any): Promise<any> {
    const entityRepository = this.getEntityRepository(entityName);
    const result = [];
    for (const element of data) {
      result.push(await entityRepository.save(element));
    }

    return result;
  }

  async update(entityName: string, id: number, data: any): Promise<any> {
    const entityRepository = this.getEntityRepository(entityName);
    const options = { where: { id } };
    const entity = await entityRepository.findOne(options);
    if (!entity) {
      throw new NotFoundException();
    }
    const updatedEntity = entityRepository.merge(entity, data);
    const model = await entityRepository.save(updatedEntity);
    return await this.findOne(entityName, model['id']);
  }

  async delete(entityName: string, id: number): Promise<any> {
    const entityRepository = this.getEntityRepository(entityName);
    const options = { where: { id } };
    const entity = await entityRepository.findOne(options);
    if (!entity) {
      throw new NotFoundException();
    }
    entity.status = 0;
    return await entityRepository.save(entity);
  }
}
