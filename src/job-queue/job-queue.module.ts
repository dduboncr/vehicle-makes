import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { JobQueueService, QueueName } from './job-queue.service';
import { IngestAllVehicleMakes } from './consumers/ingest-all-vehicle-makes.consumer';
import { IngestVehicleType } from './consumers/ingest-vehicle-type.consumer';
import { JobQueueController } from './job-queue.controller';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { HttpModule } from '@nestjs/axios';
import { VehicleRepository } from 'src/vehicle/vehicle.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    HttpModule,
    BullModule.forRoot({
      url: 'redis://localhost:6379',
      redis: {
        connectTimeout: 10000,
        reconnectOnError: () => {
          console.log('reconnecting');
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
  providers: [
    JobQueueService,
    IngestAllVehicleMakes,
    IngestVehicleType,
    VehicleService,
    VehicleRepository,
    PrismaService,
  ],
  exports: [],
})
export class JobQueueModule {}
