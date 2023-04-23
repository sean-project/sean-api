import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('frontEndConfig')
  frontEndConfig(): any {
    return {
      sentryDsn:
        'https://89265a61f3e14ea9b79e385b298e670c@o4505063820034048.ingest.sentry.io/4505063821541376',
    };
  }
}
