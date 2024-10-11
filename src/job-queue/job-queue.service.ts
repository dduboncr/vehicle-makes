import { Queue } from 'bull';

import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';

export enum QueueName {
  INGEST_VEHICLE_DATA = 'INGEST_VEHICLE_DATA',
}

@Injectable()
export class JobQueueService {
  private readonly logger: Logger = new Logger(JobQueueService.name);

  constructor(
    @InjectQueue(QueueName.INGEST_VEHICLE_DATA)
    private readonly ingestVehicleDataQueue: Queue,
  ) {}

  async CreateIngestVehicleDataJob() {
    this.logger.log(`creating ingest vehicle data job`);

    return await this.ingestVehicleDataQueue.add({ id: 1 });
  }
}
