import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { States } from './states.entity';

@Entity({ schema: process.env.TYPEORM_SCHEME, name: 'case_history' })
@Unique('unique_constraint_data', ['checkDate', 'stateId'])
export class History {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('date', { name: 'check_date' })
  checkDate: Date;

  @Column('integer', { name: 'cases_total', nullable: true })
  totalCases: number | null;

  @Column('integer', { name: 'cases_new', nullable: true })
  newCases: number | null;

  @Column('integer', { name: 'cases_confirm', nullable: true })
  confirmCases: number | null;

  @Column('integer', { name: 'cases_probable', nullable: true })
  probableCases: number | null;

  @Column('integer', { name: 'state_id' })
  stateId: number;

  @Column('integer', { name: 'status', default: 1, select: false })
  status: number;

  @ManyToOne(() => States)
  @JoinColumn({ name: 'state_id' })
  state: States;
}
