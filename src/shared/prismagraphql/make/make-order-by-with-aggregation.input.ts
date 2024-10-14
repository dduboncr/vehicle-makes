import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MakeCountOrderByAggregateInput } from './make-count-order-by-aggregate.input';
import { MakeAvgOrderByAggregateInput } from './make-avg-order-by-aggregate.input';
import { MakeMaxOrderByAggregateInput } from './make-max-order-by-aggregate.input';
import { MakeMinOrderByAggregateInput } from './make-min-order-by-aggregate.input';
import { MakeSumOrderByAggregateInput } from './make-sum-order-by-aggregate.input';

@InputType()
export class MakeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeName?: keyof typeof SortOrder;

    @Field(() => MakeCountOrderByAggregateInput, {nullable:true})
    _count?: MakeCountOrderByAggregateInput;

    @Field(() => MakeAvgOrderByAggregateInput, {nullable:true})
    _avg?: MakeAvgOrderByAggregateInput;

    @Field(() => MakeMaxOrderByAggregateInput, {nullable:true})
    _max?: MakeMaxOrderByAggregateInput;

    @Field(() => MakeMinOrderByAggregateInput, {nullable:true})
    _min?: MakeMinOrderByAggregateInput;

    @Field(() => MakeSumOrderByAggregateInput, {nullable:true})
    _sum?: MakeSumOrderByAggregateInput;
}
