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

export type BullIngestVehicleType = Job<{ makeId: string; makeName: string }>;

@Processor(QueueName.INGEST_VEHICLE_TYPE)
export class IngestVehicleType {
  private readonly logger: Logger = new Logger(IngestVehicleType.name);

  constructor(private readonly vehicleService: VehicleService) {}

  @OnQueueActive()
  onActive(job: BullIngestVehicleType) {
    this.logger.log(
      `Processing ${QueueName.INGEST_VEHICLE_TYPE} job ${job.id} with data ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onQueueCompleted<T>(job: BullIngestVehicleType) {
    this.logger.log(
      `${QueueName.INGEST_VEHICLE_TYPE} job ${job.id} finished processing`,
    );
  }

  @OnQueueFailed()
  onQueueFailed(job: BullIngestVehicleType, err: Error) {
    this.logger.error(
      `${QueueName.INGEST_VEHICLE_TYPE} job ${job.id} failed: ${err}`,
    );
  }

  @Process({ concurrency: 100 })
  async processJob(job: BullIngestVehicleType) {
    try {
      this.logger.log(
        `${QueueName.INGEST_VEHICLE_TYPE} processing job ${job.data.makeId}`,
      );

      await this.vehicleService.createVehicleMake(job.data);

      const data = await this.vehicleService.getVehicleTypeXml(job.data.makeId);

      this.logger.log(
        `vehicle type: ${JSON.stringify(data.Response.Results.VehicleTypesForMakeIds, null, 2)}`,
      );

      if (
        data.Response.Results.VehicleTypesForMakeIds &&
        Array.isArray(data.Response.Results.VehicleTypesForMakeIds) &&
        data.Response.Results.VehicleTypesForMakeIds.length > 0
      ) {
        await Promise.all(
          data.Response.Results.VehicleTypesForMakeIds.map((type) => {
            this.vehicleService.createVehicleType({
              typeId: type.VehicleTypeId,
              name: type.VehicleTypeName,
              makeId: job.data.makeId,
            });
          }),
        );
      } else {
        this.logger.log(`no vehicle types found for make ${job.data.makeId}`);
        return;
      }
    } catch (e) {
      this.logger.error(`error processing job ${job.id}: ${e}`);
      return;
    }
  }
}
