import { Logger, Controller, Post } from '@nestjs/common';
import { JobQueueService } from './job-queue.service';

@Controller('job-queue')
export class JobQueueController {
  private readonly logger = new Logger(JobQueueController.name);

  constructor(private readonly jobQueueService: JobQueueService) {}

  @Post('/vehicle/ingest')
  async IngestVehicleData() {
    return await this.jobQueueService.CreateIngestAllVehicleMakesJob();
  }
}
