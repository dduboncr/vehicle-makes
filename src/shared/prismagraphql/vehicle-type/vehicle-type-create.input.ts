import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeCreateNestedManyWithoutTypesInput } from '../vehicle-make/vehicle-make-create-nested-many-without-types.input';

@InputType()
export class VehicleTypeCreateInput {

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => VehicleMakeCreateNestedManyWithoutTypesInput, {nullable:true})
    VehicleMake?: VehicleMakeCreateNestedManyWithoutTypesInput;
}
