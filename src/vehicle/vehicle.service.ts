import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { toJson } from 'xml2json';
import { VehicleRepository } from './vehicle.repository';
import { AxiosError } from 'axios';
import { readFileSync } from 'fs';
import * as path from 'path';

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
    try {
      const { data } = await this.httpService.axiosRef.get(
        `${this.baseUrl}/getallmakes?format=XML`,
      );

      return toJson(data, { object: true }) as VehicleAllMakesResponse;
    } catch (e) {
      this.logger.error(`error getting all makes: ${e}`);

      const error = e as AxiosError;

      if (error.response?.status === 403) {
        // fallback to static file data
        this.logger.error(
          'error getting all makes, falling back to static file',
        );
        const filePath = path.join(__dirname, 'getallmakes.xml');
        const xmlData = readFileSync(filePath, 'utf-8');
        return toJson(xmlData, { object: true }) as VehicleAllMakesResponse;
      }
      throw new InternalServerErrorException(e);
    }
  }

  async getVehicleTypeXml(makeId: string): Promise<VehicleTypeResponse> {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `${this.baseUrl}/GetVehicleTypesForMakeId/${makeId}?format=XML`,
      );

      return toJson(data, { object: true }) as VehicleTypeResponse;
    } catch (e) {
      this.logger.error(`error getting vehicle type: ${e}`);
      const error = e as AxiosError;

      if (error.response?.status === 403) {
        // fallback to static file data
        this.logger.error(
          'error getting vehicle type, falling back to static file',
        );

        const filePath = path.join(
          __dirname,
          'getVehicleTypesForMakeId-440.xml',
        );

        const xmlData = readFileSync(filePath, 'utf-8');
        return toJson(xmlData, { object: true }) as VehicleTypeResponse;
      }

      throw new InternalServerErrorException(e);
    }
  }

  createVehicleMake(data: { makeId: string; makeName: string }) {
    return this.vehicleRepository.createVehicleMake(data);
  }

  createVehicleType(data: { typeId: string; name: string; makeId: string }) {
    return this.vehicleRepository.createVehicleType(data);
  }
}
