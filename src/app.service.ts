import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('testQueue')
    private testQueue: Queue
  ) {}

  async addMessageQueue(data: number) {
    for (let i = 1; i < 10; i++) {
      const job = await this.testQueue.add('task', {
        dataId: i
      });
    }
  }
}
