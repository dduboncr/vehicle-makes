import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeScalarWhereInput } from './vehicle-type-scalar-where.input';
import { Type } from 'class-transformer';
import { VehicleTypeUpdateManyMutationInput } from './vehicle-type-update-many-mutation.input';

@InputType()
export class VehicleTypeUpdateManyWithWhereWithoutVehicleMakeInput {

    @Field(() => VehicleTypeScalarWhereInput, {nullable:false})
    @Type(() => VehicleTypeScalarWhereInput)
    where!: VehicleTypeScalarWhereInput;

    @Field(() => VehicleTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleTypeUpdateManyMutationInput)
    data!: VehicleTypeUpdateManyMutationInput;
}
