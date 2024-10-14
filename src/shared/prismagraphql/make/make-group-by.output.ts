import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MakeCountAggregate } from './make-count-aggregate.output';
import { MakeAvgAggregate } from './make-avg-aggregate.output';
import { MakeSumAggregate } from './make-sum-aggregate.output';
import { MakeMinAggregate } from './make-min-aggregate.output';
import { MakeMaxAggregate } from './make-max-aggregate.output';

@ObjectType()
export class MakeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    makeId!: string;

    @Field(() => String, {nullable:false})
    makeName!: string;

    @Field(() => MakeCountAggregate, {nullable:true})
    _count?: MakeCountAggregate;

    @Field(() => MakeAvgAggregate, {nullable:true})
    _avg?: MakeAvgAggregate;

    @Field(() => MakeSumAggregate, {nullable:true})
    _sum?: MakeSumAggregate;

    @Field(() => MakeMinAggregate, {nullable:true})
    _min?: MakeMinAggregate;

    @Field(() => MakeMaxAggregate, {nullable:true})
    _max?: MakeMaxAggregate;
}
