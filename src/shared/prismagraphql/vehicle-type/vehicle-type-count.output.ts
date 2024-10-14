import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleTypeCount {

    @Field(() => Int, {nullable:false})
    VehicleMake?: number;
}
