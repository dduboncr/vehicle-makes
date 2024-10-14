import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeCreateNestedManyWithoutVehicleMakeInput } from '../vehicle-type/vehicle-type-create-nested-many-without-vehicle-make.input';

@InputType()
export class VehicleMakeCreateInput {

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => VehicleTypeCreateNestedManyWithoutVehicleMakeInput, {nullable:true})
    types?: VehicleTypeCreateNestedManyWithoutVehicleMakeInput;
}
