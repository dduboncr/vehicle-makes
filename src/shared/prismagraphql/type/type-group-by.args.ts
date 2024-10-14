import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeWhereInput } from './type-where.input';
import { Type } from 'class-transformer';
import { TypeOrderByWithAggregationInput } from './type-order-by-with-aggregation.input';
import { TypeScalarFieldEnum } from './type-scalar-field.enum';
import { TypeScalarWhereWithAggregatesInput } from './type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TypeCountAggregateInput } from './type-count-aggregate.input';
import { TypeAvgAggregateInput } from './type-avg-aggregate.input';
import { TypeSumAggregateInput } from './type-sum-aggregate.input';
import { TypeMinAggregateInput } from './type-min-aggregate.input';
import { TypeMaxAggregateInput } from './type-max-aggregate.input';

@ArgsType()
export class TypeGroupByArgs {

    @Field(() => TypeWhereInput, {nullable:true})
    @Type(() => TypeWhereInput)
    where?: TypeWhereInput;

    @Field(() => [TypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TypeOrderByWithAggregationInput>;

    @Field(() => [TypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TypeScalarFieldEnum>;

    @Field(() => TypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: TypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypeCountAggregateInput, {nullable:true})
    _count?: TypeCountAggregateInput;

    @Field(() => TypeAvgAggregateInput, {nullable:true})
    _avg?: TypeAvgAggregateInput;

    @Field(() => TypeSumAggregateInput, {nullable:true})
    _sum?: TypeSumAggregateInput;

    @Field(() => TypeMinAggregateInput, {nullable:true})
    _min?: TypeMinAggregateInput;

    @Field(() => TypeMaxAggregateInput, {nullable:true})
    _max?: TypeMaxAggregateInput;
}
