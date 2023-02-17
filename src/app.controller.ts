import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('states')
  async findStatInfo(): Promise<any> {
    return await this.appService.executeStatesDataQuery();
  }

  @Get('full')
  async findAllHistory(): Promise<any> {
    return await this.appService.executeNationalDataQuery();
  }
}
