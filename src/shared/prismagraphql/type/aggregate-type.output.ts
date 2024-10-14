import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TypeCountAggregate } from './type-count-aggregate.output';
import { TypeAvgAggregate } from './type-avg-aggregate.output';
import { TypeSumAggregate } from './type-sum-aggregate.output';
import { TypeMinAggregate } from './type-min-aggregate.output';
import { TypeMaxAggregate } from './type-max-aggregate.output';

@ObjectType()
export class AggregateType {

    @Field(() => TypeCountAggregate, {nullable:true})
    _count?: TypeCountAggregate;

    @Field(() => TypeAvgAggregate, {nullable:true})
    _avg?: TypeAvgAggregate;

    @Field(() => TypeSumAggregate, {nullable:true})
    _sum?: TypeSumAggregate;

    @Field(() => TypeMinAggregate, {nullable:true})
    _min?: TypeMinAggregate;

    @Field(() => TypeMaxAggregate, {nullable:true})
    _max?: TypeMaxAggregate;
}
