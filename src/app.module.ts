import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobQueueModule } from './job-queue/job-queue.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VehicleMakeResolver } from './vehicle/vehicle.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
      context: ({ req }) => ({ request: req }),
    }),
    VehicleModule,
    JobQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService, VehicleMakeResolver],
})
export class AppModule {}
