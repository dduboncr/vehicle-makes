import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';

@InputType()
export class VehicleMakeListRelationFilter {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    every?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    some?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    none?: VehicleMakeWhereInput;
}
