import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VehicleRepository {
  constructor(private prisma: PrismaService) {}

  findVehicleMakeById(id: string) {
    return this.prisma.make.findUnique({
      where: { makeId: id },
      include: { types: true },
    });
  }

  async findAllVehicleMakes() {
    const makes = await this.prisma.make.findMany({
      include: { types: true },
    });
    console.log(JSON.stringify(makes, null, 2));
    return makes;
  }

  async createVehicleMake(data: { makeId: string; makeName: string }) {
    const exist = await this.prisma.make.findFirst({
      where: { makeId: data.makeId },
      select: { makeId: true },
    });

    if (exist) {
      return this.prisma.make.update({
        where: { makeId: data.makeId },
        data,
      });
    }

    return this.prisma.make.create({ data });
  }

  async createVehicleType(data: {
    typeId: string;
    name: string;
    makeId: string;
  }) {
    return this.prisma.type.create({
      data: {
        name: data.name,
        typeId: data.typeId,
        makeId: data.makeId,
      },
    });
  }
}
