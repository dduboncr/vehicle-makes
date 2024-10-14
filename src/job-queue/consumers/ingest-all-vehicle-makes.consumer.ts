import { Logger } from '@nestjs/common';
import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
} from '@nestjs/bull';
import { Job } from 'bull';
import { JobQueueService, QueueName } from '../job-queue.service';
import { VehicleService } from 'src/vehicle/vehicle.service';

export type BullVehicleIngestDataJob = Job<{ id: number }>;

@Processor(QueueName.INGEST_ALL_VEHICLE_MAKES)
export class IngestAllVehicleMakes {
  private readonly logger: Logger = new Logger(IngestAllVehicleMakes.name);

  constructor(
    private readonly vehicleService: VehicleService,
    private readonly jobQueueService: JobQueueService,
  ) {}

  @OnQueueActive()
  onActive(job: BullVehicleIngestDataJob) {
    this.logger.log(
      `Processing ${QueueName.INGEST_ALL_VEHICLE_MAKES} job ${job.id} with data ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onQueueCompleted(job: BullVehicleIngestDataJob) {
    this.logger.log(
      `${QueueName.INGEST_ALL_VEHICLE_MAKES} job ${job.id} finished processing`,
    );
  }

  @OnQueueFailed()
  onQueueFailed(job: BullVehicleIngestDataJob, err: Error) {
    this.logger.error(
      `${QueueName.INGEST_ALL_VEHICLE_MAKES} job ${job.id} failed: ${err}`,
    );
  }

  @Process({ concurrency: 1 })
  async processJob(job: BullVehicleIngestDataJob) {
    try {
      this.logger.log(
        `${QueueName.INGEST_ALL_VEHICLE_MAKES} processing job ${job.id}`,
      );

      const data = await this.vehicleService.getAllMakesXml();

      const makes = data.Response.Results.AllVehicleMakes.map((make) => ({
        makeId: make.Make_ID,
        makeName: make.Make_Name,
      }));

      makes.forEach((make) => {
        this.jobQueueService.CreateIngestVehicleTypeJob(
          make.makeId,
          make.makeName,
        );
      });
    } catch (e) {
      this.logger.error(`error processing job ${job.id}: ${e}`);
      return;
    }
  }
}
