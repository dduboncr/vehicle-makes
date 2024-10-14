import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleMakeCount {

    @Field(() => Int, {nullable:false})
    types?: number;
}
