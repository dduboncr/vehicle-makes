import { Args, Query, Resolver } from '@nestjs/graphql';
import { VehicleMake } from 'src/shared/prismagraphql/vehicle-make';
import { VehicleRepository } from './vehicle.repository';

@Resolver(() => VehicleMake)
export class VehicleMakeResolver {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  @Query(() => [VehicleMake], { nullable: false })
  makes() {
    return this.vehicleRepository.findAllVehicleMakes();
  }

  @Query(() => VehicleMake, { nullable: true })
  make(@Args('id') id: string) {
    return this.vehicleRepository.findVehicleMakeById(id);
  }
}
