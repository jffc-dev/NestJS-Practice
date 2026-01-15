import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('my-queue')
export class MyQueueProcessor extends WorkerHost {
  // Define job processing methods here
  async process(job: Job): Promise<void> {
    console.log(
      `Processing job with id ${job.id} and data ${JSON.stringify(job.data)}`,
    );
    setTimeout(() => {
      console.log(`Job with id ${job.id} completed`);
    }, 2000);
    // Simulate job processing delay with promise
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(`Job with id ${job.id} resolved`);
        resolve(1);
      }, 2000),
    );
    const chance = Math.random();
    if (chance < 0.5) {
      console.log(`Job with id ${job.id} failed`);
      throw new Error('Random job failure');
    }
  }
}
