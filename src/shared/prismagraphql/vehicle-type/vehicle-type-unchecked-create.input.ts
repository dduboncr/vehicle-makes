import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VehicleMakeUncheckedCreateNestedManyWithoutTypesInput } from '../vehicle-make/vehicle-make-unchecked-create-nested-many-without-types.input';

@InputType()
export class VehicleTypeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => VehicleMakeUncheckedCreateNestedManyWithoutTypesInput, {nullable:true})
    VehicleMake?: VehicleMakeUncheckedCreateNestedManyWithoutTypesInput;
}
