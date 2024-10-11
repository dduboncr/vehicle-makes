import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VehicleRepository {
  constructor(private prisma: PrismaService) {}

  async createVehicleMake(data: { makeId: string; makeName: string }) {
    const exist = await this.prisma.vehicleMake.findFirst({
      where: { makeId: data.makeId },
      select: { makeId: true },
    });

    if (exist) {
      return this.prisma.vehicleMake.update({
        where: { makeId: data.makeId },
        data,
      });
    }

    return this.prisma.vehicleMake.create({ data });
  }

  async createVehicleType(data: {
    typeId: string;
    name: string;
    makeId: string;
  }) {
    const exist = await this.prisma.vehicleType.findFirst({
      where: { typeId: data.typeId },
      select: { typeId: true },
    });

    if (exist) {
      return this.prisma.vehicleType.update({
        where: { typeId: data.typeId },
        data,
      });
    }

    return this.prisma.vehicleType.create({
      data: {
        vehicleMakeId: data.makeId,
        name: data.name,
        typeId: data.typeId,
      },
    });
  }
}
