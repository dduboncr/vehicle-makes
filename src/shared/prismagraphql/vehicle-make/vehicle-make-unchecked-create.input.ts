import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VehicleTypeUncheckedCreateNestedManyWithoutVehicleMakeInput } from '../vehicle-type/vehicle-type-unchecked-create-nested-many-without-vehicle-make.input';

@InputType()
export class VehicleMakeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => VehicleTypeUncheckedCreateNestedManyWithoutVehicleMakeInput, {nullable:true})
    types?: VehicleTypeUncheckedCreateNestedManyWithoutVehicleMakeInput;
}
