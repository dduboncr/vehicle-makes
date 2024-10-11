import { Logger } from '@nestjs/common';
import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
} from '@nestjs/bull';
import { Job } from 'bull';
import { QueueName } from '../job-queue.service';

export type BullVehicleIngestDataJob = Job<{ id: number }>;

@Processor(QueueName.INGEST_VEHICLE_DATA)
export class VehicleIngestDataConsumer {
  private readonly logger: Logger = new Logger(VehicleIngestDataConsumer.name);

  constructor() {}

  @OnQueueActive()
  onActive(job: BullVehicleIngestDataJob) {
    this.logger.log(
      `Processing ${QueueName.INGEST_VEHICLE_DATA} job ${job.id} with data ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onQueueCompleted<T>(job: BullVehicleIngestDataJob) {
    this.logger.log(
      `${QueueName.INGEST_VEHICLE_DATA} job ${job.id} finished processing`,
    );
  }

  @OnQueueFailed()
  onQueueFailed(job: BullVehicleIngestDataJob, err: Error) {
    this.logger.error(
      `${QueueName.INGEST_VEHICLE_DATA} job ${job.id} failed: ${err}`,
    );
  }

  @Process({ concurrency: 1 })
  async processJob(job: BullVehicleIngestDataJob) {
    this.logger.log(
      `${QueueName.INGEST_VEHICLE_DATA} processing job ${job.id}`,
    );
  }
}
