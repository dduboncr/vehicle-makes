import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VehicleMakeCountAggregate } from './vehicle-make-count-aggregate.output';
import { VehicleMakeAvgAggregate } from './vehicle-make-avg-aggregate.output';
import { VehicleMakeSumAggregate } from './vehicle-make-sum-aggregate.output';
import { VehicleMakeMinAggregate } from './vehicle-make-min-aggregate.output';
import { VehicleMakeMaxAggregate } from './vehicle-make-max-aggregate.output';

@ObjectType()
export class AggregateVehicleMake {

    @Field(() => VehicleMakeCountAggregate, {nullable:true})
    _count?: VehicleMakeCountAggregate;

    @Field(() => VehicleMakeAvgAggregate, {nullable:true})
    _avg?: VehicleMakeAvgAggregate;

    @Field(() => VehicleMakeSumAggregate, {nullable:true})
    _sum?: VehicleMakeSumAggregate;

    @Field(() => VehicleMakeMinAggregate, {nullable:true})
    _min?: VehicleMakeMinAggregate;

    @Field(() => VehicleMakeMaxAggregate, {nullable:true})
    _max?: VehicleMakeMaxAggregate;
}
