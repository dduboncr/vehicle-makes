import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TypeCountOrderByAggregateInput } from './type-count-order-by-aggregate.input';
import { TypeAvgOrderByAggregateInput } from './type-avg-order-by-aggregate.input';
import { TypeMaxOrderByAggregateInput } from './type-max-order-by-aggregate.input';
import { TypeMinOrderByAggregateInput } from './type-min-order-by-aggregate.input';
import { TypeSumOrderByAggregateInput } from './type-sum-order-by-aggregate.input';

@InputType()
export class TypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeId?: keyof typeof SortOrder;

    @Field(() => TypeCountOrderByAggregateInput, {nullable:true})
    _count?: TypeCountOrderByAggregateInput;

    @Field(() => TypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: TypeAvgOrderByAggregateInput;

    @Field(() => TypeMaxOrderByAggregateInput, {nullable:true})
    _max?: TypeMaxOrderByAggregateInput;

    @Field(() => TypeMinOrderByAggregateInput, {nullable:true})
    _min?: TypeMinOrderByAggregateInput;

    @Field(() => TypeSumOrderByAggregateInput, {nullable:true})
    _sum?: TypeSumOrderByAggregateInput;
}
