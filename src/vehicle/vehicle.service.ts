import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { toJson } from 'xml2json';
import { VehicleRepository } from './vehicle.repository';

type VehicleAllMakesResponse = {
  Response: {
    Results: {
      AllVehicleMakes: {
        Make_ID: string;
        Make_Name: string;
      }[];
    };
  };
};

type VehicleType = {
  VehicleTypeId: string;
  VehicleTypeName: string;
};

type VehicleTypeResponse = {
  Response: {
    Results: {
      VehicleTypesForMakeIds: VehicleType | VehicleType[];
    };
  };
};

@Injectable()
export class VehicleService {
  private readonly logger = new Logger(VehicleService.name);

  private readonly baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/';
  constructor(
    private readonly httpService: HttpService,
    private readonly vehicleRepository: VehicleRepository,
  ) {}
  async getAllMakesXml(): Promise<VehicleAllMakesResponse> {
    const { data } = await this.httpService.axiosRef.get(
      `${this.baseUrl}/getallmakes?format=XML`,
    );

    return toJson(data, { object: true }) as VehicleAllMakesResponse;
  }

  async getVehicleTypeXml(makeId: string): Promise<VehicleTypeResponse> {
    const { data } = await this.httpService.axiosRef.get(
      `${this.baseUrl}/GetVehicleTypesForMakeId/${makeId}?format=XML`,
    );

    return toJson(data, { object: true }) as VehicleTypeResponse;
  }

  createVehicleMake(data: { makeId: string; makeName: string }) {
    return this.vehicleRepository.createVehicleMake(data);
  }

  createVehicleType(data: { typeId: string; name: string; makeId: string }) {
    return this.vehicleRepository.createVehicleType(data);
  }
}
