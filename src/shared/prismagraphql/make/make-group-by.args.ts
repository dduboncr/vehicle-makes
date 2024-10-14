import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MakeWhereInput } from './make-where.input';
import { Type } from 'class-transformer';
import { MakeOrderByWithAggregationInput } from './make-order-by-with-aggregation.input';
import { MakeScalarFieldEnum } from './make-scalar-field.enum';
import { MakeScalarWhereWithAggregatesInput } from './make-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MakeCountAggregateInput } from './make-count-aggregate.input';
import { MakeAvgAggregateInput } from './make-avg-aggregate.input';
import { MakeSumAggregateInput } from './make-sum-aggregate.input';
import { MakeMinAggregateInput } from './make-min-aggregate.input';
import { MakeMaxAggregateInput } from './make-max-aggregate.input';

@ArgsType()
export class MakeGroupByArgs {

    @Field(() => MakeWhereInput, {nullable:true})
    @Type(() => MakeWhereInput)
    where?: MakeWhereInput;

    @Field(() => [MakeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MakeOrderByWithAggregationInput>;

    @Field(() => [MakeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MakeScalarFieldEnum>;

    @Field(() => MakeScalarWhereWithAggregatesInput, {nullable:true})
    having?: MakeScalarWhereWithAggregatesInput;

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
