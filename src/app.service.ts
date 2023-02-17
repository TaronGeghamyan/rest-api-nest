import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async executeStatesDataQuery() {
    const query = `SELECT 
        states.id, 
        states.name, 
        h.check_date, 
        h.cases_total, 
        h.cases_new, 
        h.cases_confirm, 
        h.cases_probable 
      FROM ${process.env.TYPEORM_SCHEME}.states 
        JOIN (
          SELECT state_id, MAX(id) as max_id 
          FROM ${process.env.TYPEORM_SCHEME}.case_history 
          WHERE status > 0
          GROUP BY state_id
        ) u ON states.id = u.state_id 
        JOIN ${process.env.TYPEORM_SCHEME}.case_history h ON h.id = u.max_id
        WHERE states.status > 0`;

    return await this.connection.query(query);
  }

  async executeNationalDataQuery() {
    const query = `SELECT 
        SUM(cases_total) as cases_total, SUM(cases_new) as cases_new,
        SUM(cases_confirm) as cases_confirm, SUM(cases_probable) as cases_probable,
        check_date
        FROM ${process.env.TYPEORM_SCHEME}.case_history
        WHERE case_history.status > 0
        GROUP BY check_date`;

    return await this.connection.query(query);
  }
}
