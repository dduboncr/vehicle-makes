import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleRepository } from './vehicle.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [HttpModule],
  providers: [PrismaService, VehicleService, VehicleRepository],
  exports: [VehicleService, VehicleRepository],
})
export class VehicleModule {}
