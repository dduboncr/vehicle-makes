import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleMakeWhereInput } from './vehicle-make-where.input';

@InputType()
export class VehicleMakeNullableRelationFilter {

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    is?: VehicleMakeWhereInput;

    @Field(() => VehicleMakeWhereInput, {nullable:true})
    isNot?: VehicleMakeWhereInput;
}
