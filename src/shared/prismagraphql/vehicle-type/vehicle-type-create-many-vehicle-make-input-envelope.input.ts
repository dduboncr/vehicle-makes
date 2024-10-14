import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeCreateManyVehicleMakeInput } from './vehicle-type-create-many-vehicle-make.input';
import { Type } from 'class-transformer';

@InputType()
export class VehicleTypeCreateManyVehicleMakeInputEnvelope {

    @Field(() => [VehicleTypeCreateManyVehicleMakeInput], {nullable:false})
    @Type(() => VehicleTypeCreateManyVehicleMakeInput)
    data!: Array<VehicleTypeCreateManyVehicleMakeInput>;
}
