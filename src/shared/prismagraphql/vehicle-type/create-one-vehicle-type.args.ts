import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeCreateInput } from './vehicle-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVehicleTypeArgs {

    @Field(() => VehicleTypeCreateInput, {nullable:false})
    @Type(() => VehicleTypeCreateInput)
    data!: VehicleTypeCreateInput;
}
