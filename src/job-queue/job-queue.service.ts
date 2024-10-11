import { Queue } from 'bull';

import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';

export enum QueueName {
  INGEST_ALL_VEHICLE_MAKES = 'INGEST_ALL_VEHICLE_MAKES',
  INGEST_VEHICLE_TYPE = 'INGEST_VEHICLE_TYPE',
}

@Injectable()
export class JobQueueService {
  private readonly logger: Logger = new Logger(JobQueueService.name);

  constructor(
    @InjectQueue(QueueName.INGEST_ALL_VEHICLE_MAKES)
    private readonly ingestVehicleDataQueue: Queue,
    @InjectQueue(QueueName.INGEST_VEHICLE_TYPE)
    private readonly ingestVehicleTypeQueue: Queue,
  ) {}

  async CreateIngestAllVehicleMakesJob() {
    this.logger.log(`creating ingest vehicle data job`);

    return await this.ingestVehicleDataQueue.add({ id: 1 });
  }

  async CreateIngestVehicleTypeJob(makeId: string, makeName: string) {
    return await this.ingestVehicleTypeQueue.add({
      makeId: makeId,
      makeName: makeName,
    });
  }
}
