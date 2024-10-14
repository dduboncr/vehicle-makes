import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeScalarWhereInput } from './vehicle-make-scalar-where.input';
import { Type } from 'class-transformer';
import { VehicleMakeUpdateManyMutationInput } from './vehicle-make-update-many-mutation.input';

@InputType()
export class VehicleMakeUpdateManyWithWhereWithoutTypesInput {

    @Field(() => VehicleMakeScalarWhereInput, {nullable:false})
    @Type(() => VehicleMakeScalarWhereInput)
    where!: VehicleMakeScalarWhereInput;

    @Field(() => VehicleMakeUpdateManyMutationInput, {nullable:false})
    @Type(() => VehicleMakeUpdateManyMutationInput)
    data!: VehicleMakeUpdateManyMutationInput;
}
