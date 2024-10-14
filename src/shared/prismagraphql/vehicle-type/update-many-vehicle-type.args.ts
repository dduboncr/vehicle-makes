import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VehicleTypeUpdateManyMutationInput } from './vehicle-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';

@ArgsType()
export class UpdateManyVehicleTypeArgs {

    @Field(() => VehicleTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleTypeUpdateManyMutationInput)
    data!: VehicleTypeUpdateManyMutationInput;

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    @Type(() => VehicleTypeWhereInput)
    where?: VehicleTypeWhereInput;
}
