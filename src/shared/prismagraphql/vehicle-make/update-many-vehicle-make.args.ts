import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleMakeUpdateManyMutationInput } from './vehicle-make-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';

@ArgsType()
export class UpdateManyVehicleMakeArgs {

    @Field(() => VehicleMakeUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleMakeUpdateManyMutationInput)
    data!: VehicleMakeUpdateManyMutationInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    @Type(() => VehicleMakeWhereInput)
    where?: VehicleMakeWhereInput;
}
