import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VehicleTypeCountOrderByAggregateInput } from './vehicle-type-count-order-by-aggregate.input';
import { VehicleTypeAvgOrderByAggregateInput } from './vehicle-type-avg-order-by-aggregate.input';
import { VehicleTypeMaxOrderByAggregateInput } from './vehicle-type-max-order-by-aggregate.input';
import { VehicleTypeMinOrderByAggregateInput } from './vehicle-type-min-order-by-aggregate.input';
import { VehicleTypeSumOrderByAggregateInput } from './vehicle-type-sum-order-by-aggregate.input';

@InputType()
export class VehicleTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => VehicleTypeCountOrderByAggregateInput, {nullable:true})
    _count?: VehicleTypeCountOrderByAggregateInput;

    @Field(() => VehicleTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: VehicleTypeAvgOrderByAggregateInput;

    @Field(() => VehicleTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: VehicleTypeMaxOrderByAggregateInput;

    @Field(() => VehicleTypeMinOrderByAggregateInput, {nullable:true})
    _min?: VehicleTypeMinOrderByAggregateInput;

    @Field(() => VehicleTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: VehicleTypeSumOrderByAggregateInput;
}
