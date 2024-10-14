import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeCreateInput } from './vehicle-make-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVehicleMakeArgs {

    @Field(() => VehicleMakeCreateInput, {nullable:false})
    @Type(() => VehicleMakeCreateInput)
    data!: VehicleMakeCreateInput;
}
