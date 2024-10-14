import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleTypeWhereInput } from './vehicle-type-where.input';

@InputType()
export class VehicleTypeListRelationFilter {

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    every?: VehicleTypeWhereInput;

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    some?: VehicleTypeWhereInput;

    @Field(() => VehicleTypeWhereInput, {nullable:true})
    none?: VehicleTypeWhereInput;
}
