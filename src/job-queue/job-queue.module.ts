import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { JobQueueService, QueueName } from './job-queue.service';
import { VehicleIngestDataConsumer } from './consumers/vehicle-data.consumer';
import { JobQueueController } from './job-queue.controller';

@Module({
  imports: [
    BullModule.forRoot({
      url: 'redis://localhost:6379',
      redis: {
        reconnectOnError: () => {
          return true;
        },
      },
    }),

    BullModule.registerQueue(
      ...Object.values(QueueName).map((queue) => ({
        name: queue,
      })),
    ),
  ],
  controllers: [JobQueueController],
  providers: [JobQueueService, VehicleIngestDataConsumer],
  exports: [BullModule],
})
export class JobQueueModule {}
