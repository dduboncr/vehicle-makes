import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VehicleMakeCountOrderByAggregateInput } from './vehicle-make-count-order-by-aggregate.input';
import { VehicleMakeAvgOrderByAggregateInput } from './vehicle-make-avg-order-by-aggregate.input';
import { VehicleMakeMaxOrderByAggregateInput } from './vehicle-make-max-order-by-aggregate.input';
import { VehicleMakeMinOrderByAggregateInput } from './vehicle-make-min-order-by-aggregate.input';
import { VehicleMakeSumOrderByAggregateInput } from './vehicle-make-sum-order-by-aggregate.input';

@InputType()
export class VehicleMakeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    makeName?: keyof typeof SortOrder;

    @Field(() => VehicleMakeCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleMakeCountOrderByAggregateInput;

    @Field(() => VehicleMakeAvgOrderByAggregateInput, {nullable:true})
    _avg?: VehicleMakeAvgOrderByAggregateInput;

    @Field(() => VehicleMakeMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleMakeMaxOrderByAggregateInput;

    @Field(() => VehicleMakeMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleMakeMinOrderByAggregateInput;

    @Field(() => VehicleMakeSumOrderByAggregateInput, {nullable:true})
    _sum?: VehicleMakeSumOrderByAggregateInput;
}
