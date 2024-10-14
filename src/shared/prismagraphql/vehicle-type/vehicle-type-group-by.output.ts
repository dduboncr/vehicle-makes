import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VehicleTypeCountAggregate } from './vehicle-type-count-aggregate.output';
import { VehicleTypeAvgAggregate } from './vehicle-type-avg-aggregate.output';
import { VehicleTypeSumAggregate } from './vehicle-type-sum-aggregate.output';
import { VehicleTypeMinAggregate } from './vehicle-type-min-aggregate.output';
import { VehicleTypeMaxAggregate } from './vehicle-type-max-aggregate.output';

@ObjectType()
export class VehicleTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    typeId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => VehicleTypeCountAggregate, {nullable:true})
    _count?: VehicleTypeCountAggregate;

    @Field(() => VehicleTypeAvgAggregate, {nullable:true})
    _avg?: VehicleTypeAvgAggregate;

    @Field(() => VehicleTypeSumAggregate, {nullable:true})
    _sum?: VehicleTypeSumAggregate;

    @Field(() => VehicleTypeMinAggregate, {nullable:true})
    _min?: VehicleTypeMinAggregate;

    @Field(() => VehicleTypeMaxAggregate, {nullable:true})
    _max?: VehicleTypeMaxAggregate;
}
