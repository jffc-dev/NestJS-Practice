import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectQueue('my-queue') private readonly myQueue: Queue,
  ) {}

  @Post('/process')
  async processJob(): Promise<string> {
    this.myQueue.add('my-queue', { foo: 'bar' });
    return 'Job processing started';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
