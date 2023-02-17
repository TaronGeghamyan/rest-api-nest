import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: process.env.TYPEORM_SCHEME, name: 'states' })
export class States {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code' })
  code: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('integer', { name: 'status', default: 1, select: false })
  status: number;
}
