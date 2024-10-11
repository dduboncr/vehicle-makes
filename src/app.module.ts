import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobQueueModule } from './job-queue/job-queue.module';

@Module({
  imports: [JobQueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
