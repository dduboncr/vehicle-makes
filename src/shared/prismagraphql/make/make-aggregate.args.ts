import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { Type } from 'class-transformer';
import { MakeOrderByWithRelationInput } from './make-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MakeWhereUniqueInput } from './make-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MakeCountAggregateInput } from './make-count-aggregate.input';
import { MakeAvgAggregateInput } from './make-avg-aggregate.input';
import { MakeSumAggregateInput } from './make-sum-aggregate.input';
import { MakeMinAggregateInput } from './make-min-aggregate.input';
import { MakeMaxAggregateInput } from './make-max-aggregate.input';

@ArgsType()
export class MakeAggregateArgs {

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;

    @Field(() => [MakeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MakeOrderByWithRelationInput>;

    @Field(() => MakeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MakeWhereUniqueInput, 'id' | 'makeId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MakeCountAggregateInput, {nullable:true})
    _count?: MakeCountAggregateInput;

    @Field(() => MakeAvgAggregateInput, {nullable:true})
    _avg?: MakeAvgAggregateInput;

    @Field(() => MakeSumAggregateInput, {nullable:true})
    _sum?: MakeSumAggregateInput;

    @Field(() => MakeMinAggregateInput, {nullable:true})
    _min?: MakeMinAggregateInput;

    @Field(() => MakeMaxAggregateInput, {nullable:true})
    _max?: MakeMaxAggregateInput;
}
